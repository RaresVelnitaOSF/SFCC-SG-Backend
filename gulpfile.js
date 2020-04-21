'use strict';

var browserify = require('browserify'),
    connect = require('gulp-connect'),
    gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    eslintIfFixed = require('gulp-eslint-if-fixed'),
    gutil = require('gulp-util'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint'),
    minimist = require('minimist'),
    mocha = require('gulp-mocha'),
    runSeq = require('run-sequence'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    stylish = require('jshint-stylish'),
    prefix = require('gulp-autoprefixer'),
    watchify = require('watchify'),
    xtend = require('xtend'),
    spritesmith = require('gulp.spritesmith'),
    mergeStream = require("merge-stream"),
    debug = require('gulp-debug');

var sfccGlobals = [
    'session',
    'request',
    'customer',
    'dw',
    'empty',
    'response',
    'webreferences',
    'webreferences2'
];

var paths = {
    scss: {
        src: './app_storefront_core/cartridge/scss/default/*.scss',
        dest: './app_storefront_core/cartridge/static/default/css'
    },
    js: {
        src: './app_storefront_core/cartridge/js/app.js',
        dest: './app_storefront_core/cartridge/static/default/js'
    },
    client: {
        src: [
            './app_storefront_training/cartridge/js/**/*.js',
            '!./app_storefront_core/cartridge/js/tls.js'
        ]
    },
    server: {
        src: [
            './app_storefront_training/cartridge/scripts/**/*.{js,ds}',
            './app_storefront_training/cartridge/controllers/**/*.{js,ds}',
            '!./app_storefront_core/cartridge/scripts/account/giftregistry/AssignEventAddresses.js',
            '!./app_storefront_core/cartridge/scripts/checkout/InvalidatePaymentCardFormElements.js',
            '!./app_storefront_core/cartridge/scripts/common/dynamicForm.js'
        ]
    }
}

var SCSS_PATHS = {
    src: [
        './app_storefront_core/cartridge/scss/default/*.scss',
        './app_storefront_training/cartridge/scss/default/**/*.scss',
        '!app_storefront_core/cartridge/scss/default/_footer.scss',
        '!app_storefront_core/cartridge/scss/default/_jqueryui.scss',
        '!app_storefront_core/cartridge/scss/default/_page_layouts.scss',
        '!app_storefront_core/cartridge/scss/default/_primary_region_elements.scss',
        '!app_storefront_core/cartridge/scss/default/_product_tiles.scss',
        '!app_storefront_core/cartridge/scss/default/_responsive.scss',
        '!app_storefront_core/cartridge/scss/default/_secondary_region_elements.scss',
        '!./app_storefront_core/cartridge/scss/README.md'
    ]
}

var watching = false;
gulp.task('enable-watch-mode', function () { watching = true });

gulp.task('lint-fix', ['lint-fix-client', 'lint-fix-server']);

gulp.task('lint-fix-client', function() {
    return gulp
        .src(paths.client.src)
        .pipe(eslint({
            envs : ['es6'],
            "rules": {
                "space-after-keywords": "off",
                "space-before-keywords": "off",
                "keyword-spacing": [2, {"before": true, "after": true}]
            },
            fix: true
        }))
        .pipe(eslint.format())
        .pipe(eslintIfFixed(function(file) {
            return file.base;
        }));
});

gulp.task("lint-fix-server", function() {
    return gulp
        .src(paths.server.src)
        .pipe(eslint({
            globals : sfccGlobals,
            envs : ['es6'],
            "rules": {
                "space-after-keywords": "off",
                "space-before-keywords": "off",
                "keyword-spacing": [2, {"before": true, "after": true}]
            },
            fix : true
        }))
        .pipe(eslint.format())
        .pipe(eslintIfFixed(function(file) {
            return file.base;
        }));
});

gulp.task('lint-scss', function lintCssTask() {
    const stylelint = require('gulp-stylelint');
    var streams = mergeStream();

    streams.add(gulp
        .src(SCSS_PATHS.src)
        .pipe(stylelint({
            failAfterError: true,
            reporters: [
                { formatter: 'string', console: true }
            ]
        })));

    return streams;
});

gulp.task('scss', ['lint-scss'], function () {
    var streams = mergeStream();
    
    streams.add(gulp
        .src(paths.scss.src)
        .pipe(sass()
        .on('error', sass.logError))
        .pipe(prefix({cascade: true}))
        .pipe(gulp.dest(paths.scss.dest)))
});

gulp.task("lint", ["lint-client", "lint-server"]);

gulp.task("lint-client", function() {
    return gulp
        .src(paths.client.src)
        .pipe(eslint({"rules": {
            "space-after-keywords": "off",
            "space-before-keywords": "off",
            "keyword-spacing": [2, {"before": true, "after": true}]
  }}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("lint-server", function() {
    return gulp
        .src(paths.server.src)
        .pipe(debug('default'))
        .pipe(eslint({
            globals : sfccGlobals,
            envs : ['es6']
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('sprite', function(){
    var sprite, options;

    options = {
        imgName     : 'sprite.png',
        cssName     : '_sprite.scss',
        cssFormat   : 'scss',
        padding     : 20,
        algorithm   : 'top-down',
        imgPath     : '../images/sprite.png',
        cssVarMap: function (sprite) {
            sprite.name = sprite.name.toLowerCase();
        }
    }

    sprite = gulp.src( './app_storefront_core/cartridge/static/default/images/sprite/*.png' )
          .pipe(spritesmith( options ));

    sprite.img.pipe( gulp.dest( './app_storefront_core/cartridge/static/default/images/' ) );
    sprite.css.pipe( gulp.dest( './app_storefront_core/cartridge/scss/settings' ) );
});

gulp.task('js', function () {
    var opts = {
        entries: paths.js.src,
        debug: (gutil.env.type === 'development')
    }
    if (watching) {
        opts = xtend(opts, watchify.args);
    }
    var bundler = browserify(opts);
    if (watching) {
        bundler = watchify(bundler);
    }
    // optionally transform
    // bundler.transform('transformer');

    bundler.on('update', function (ids) {
        gutil.log('File(s) changed: ' + gutil.colors.cyan(ids));
        gutil.log('Rebunlding...');
        rebundle();
    });

    function rebundle () {
        return bundler
            .bundle()
            .on('error', function (e) {
                gutil.log('Browserify Error', gutil.colors.red(e));
                gutil.beep();
            })
            .on('finish', function (e) {
                gutil.log('Finished');
            })
            .pipe(source('app.js'))
            .pipe(gulp.dest(paths.js.dest));
    }
    return rebundle();
});

gulp.task('jscs', function () {
    return gulp.src('**/*.js')
        .pipe(jscs());
});

gulp.task('jshint', function () {
    return gulp.src('./app_storefront_core/cartridge/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('ui-test', function () {
    var opts = minimist(process.argv.slice(2));
    // default option to all
    var suite = opts.suite || '*';
    if (suite === 'all') {
        suite = '*';
    }
    // default reporter to spec
    var reporter = opts.reporter || 'spec';
    // default timeout to 10s
    var timeout = opts.timeout || 10000;
    return gulp.src(['test/ui/' + suite + '/**/*.js', '!test/ui/webdriver/*'], {read: false})
        .pipe(mocha({
            reporter: reporter,
            timeout : timeout
        }));
});

var transform = require('vinyl-transform');
var rename = require('gulp-rename');
var filter = require('gulp-filter');
gulp.task('test-browserify', function () {
    var browserified = transform(function (filename) {
        var b = browserify(filename);
        return b.bundle();
    });

    return gulp.src(['test/unit/browser/*.js', '!test/unit/browser/*.out.js'])
        .pipe(browserified)
        .pipe(rename(function (path) {
            path.dirname += '/dist';
        }))
        .pipe(gulp.dest('test/unit/browser'));
});

gulp.task('test-connect', function () {
    var opts = minimist(process.argv.slice(2));
    var port = opts.port || 7000;
    return connect.server({
        root: 'test/unit/browser',
        port: port
    });
});
gulp.task('unit-test', ['test-browserify', 'test-connect'], function () {
    var opts = minimist(process.argv.slice(2));
    var reporter = opts.reporter || 'spec';
    var timeout = opts.timeout || 10000;
    var suite = opts.suite || '*';
    gulp.src(['test/unit/' + suite + '/**/*.js', '!test/unit/browser/**/*', '!test/unit/webdriver/*'], {read: false})
        .pipe(mocha({
            reporter: reporter,
            timeout: timeout
        }))
        .on('end', function () {
            connect.serverClose();
        })
});

gulp.task('watch', function () {
    runSeq('enable-watch-mode', 'lint-client', 'js', 'lint-server', 'scss', 'sprite');
    
    gulp.watch(paths.client.src, ['lint-client']);
    
    gulp.watch(paths.server.src, ['lint-server']);
    
    SCSS_PATHS.src.forEach(function (p) {
        gulp.watch(p, ['scss']);
    });
    gulp.watch('./app_storefront_core/cartridge/static/default/images/sprite/*', ['sprite']);
});

var gulp = require('gulp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var _ = require('lodash');
var sourcemaps = require('gulp-sourcemaps');

var pkg = require('./package.json');
var pathS = pkg.paths;
var opts = minimist(process.argv.slice(2));

require('babel-core/register');

var gif = require('gulp-if');
var merge = require('merge-stream');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('css', function () {
	var streams = merge();
	pathS.css.forEach(function (path) {
		streams.add(gulp.src(path.src + '*.scss')
			.pipe(gif(gutil.env.sourcemaps, sourcemaps.init()))
			.pipe(sass())
			.pipe(prefix({cascade: true}))
			.pipe(gif(gutil.env.sourcemaps, sourcemaps.write('./')))
			.pipe(gulp.dest(path.dest)));
	});
	return streams;
});

var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var eventStream = require('event-stream');
var watching = false;
gulp.task('enable-watch-mode', function () {watching = true;});
gulp.task('js', function (done) {
	function createBundler (path) {
		var opts = {
			entries: './' + path.src + 'app.js', // browserify requires relative path
			debug: gutil.env.sourcemaps
		};
		if (watching) {
			opts = Object.assign(opts, watchify.args);
		}
		var bundler = browserify(opts);
		if (watching) {
			bundler = watchify(bundler);
		}
		// optionally transform
		// bundler.transform('transformer');

		bundler.on('update', function (ids) {
			gutil.log('File(s) changed: ' + gutil.colors.cyan(ids));
			gutil.log('Rebundling...');
			rebundle(bundler, path);
		});

		bundler.on('log', gutil.log);
		return bundler;
	}
	function rebundle (bundler, path) {
		return bundler.bundle()
			.on('error', function (e) {
				gutil.log('Browserify Error', gutil.colors.red(e));
			})
			.pipe(source('app.js'))
			// sourcemaps
				.pipe(buffer())
				.pipe(sourcemaps.init({loadMaps: true}))
				.pipe(sourcemaps.write('./'))
			//
			.pipe(gulp.dest(path.dest));
	}
	return eventStream.merge(pathS.js.map(function (path) {
		var b = createBundler(path);
		return rebundle(b, path);
	}));
});

var dwdav = require('dwdav');
var path = require('path');
var config = require('@tridnguyen/config');
function upload (files) {
	var credentials = config('dw.json', {caller: false});
	var server = dwdav(credentials);
	Promise.all(files.map(function (f) {
		return server.post(path.relative(process.cwd(), f));
	})).then(function() {
		gutil.log(gutil.colors.green('Uploaded ' + files.join(',') + ' to the server'));
	}).catch(function(err) {
		gutil.log(gutil.colors.red('Error uploading ' + files.join(','), err));
	});
}

var eslint = require('gulp-eslint');
gulp.task('lint', function() {
	return gulp.src('./**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

var webdriver = require('gulp-webdriver');
gulp.task('test:application', function () {
	return gulp.src('test/application/webdriver/wdio.conf.js')
		.pipe(webdriver(_.omit(opts, '_')));
});

var gulpMocha = require('gulp-mocha');
gulp.task('test:unit', function () {
	var reporter = opts.reporter || 'spec';
	var timeout = opts.timeout || 10000;
	var suite = opts.suite || '*';
	return gulp.src(['test/unit/' + suite + '/**/*.js'], {read: false})
		.pipe(gulpMocha({
			reporter: reporter,
			timeout: timeout
		}));
});

gulp.task('build', ['js', 'css']);

gulp.task('watch:server', function() {
    gulp.watch(['app_storefront_controllers/cartridge/**/*.{js,json,properties}',
                    'app_storefront_core/cartridge/**/*.{isml,json,properties,xml}',
                    'app_storefront_core/cartridge/scripts/**/*.{js,ds}',
                    'app_storefront_core/cartridge/static/**/*.{js,css,png,gif}',
                    'app_storefront_pipelines/cartridge/**/*.{properties,xml}'], {}, function(event) {
                        upload([event.path]);
                    }
    );
});

gulp.task('default', ['enable-watch-mode', 'js', 'css', 'watch:server'], function () {
	gulp.watch(pathS.css.map(function (path) {
		return path.src + '**/*.scss';
	}), ['css']);
});

var hbsfy = require('hbsfy');
var styleguideWatching = false;
gulp.task('styleguide-watching', function () {styleguideWatching = true;});
gulp.task('js:styleguide', function () {
	var opts = {
		entries: ['./styleguide/js/main.js'],
		debug: (gutil.env.sourcemaps)
	};
	if (styleguideWatching) {
		opts = Object.assign(opts, watchify.args);
	}
	var bundler = browserify(opts);
	if (styleguideWatching) {
		bundler = watchify(bundler);
	}

	// transforms
	bundler.transform(hbsfy);

	bundler.on('update', function (ids) {
		gutil.log('File(s) changed: ' + gutil.colors.cyan(ids));
		gutil.log('Rebundling...');
		bundle();
	});

	var bundle = function () {
		return bundler
			.bundle()
			.on('error', function (e) {
				gutil.log('Browserify Error', gutil.colors.red(e));
			})
			.pipe(source('main.js'))
			.pipe(gulp.dest('./styleguide/dist'));
	};
	return bundle();
});

var connect = require('gulp-connect');

gulp.task('connect:styleguide', function () {
	var port = opts.port || 8000;
	return connect.server({
		root: 'styleguide',
		port: port
	});
});

gulp.task('css:styleguide', function () {
	return gulp.src('styleguide/scss/*.scss')
		.pipe(sass())
		.pipe(prefix({cascade: true}))
		.pipe(gulp.dest('styleguide/dist'));
});

gulp.task('styleguide', ['styleguide-watching', 'js:styleguide', 'css:styleguide', 'connect:styleguide'], function () {
	var styles = pathS.css.map(function (path) {
		return path.src + '**/*.scss';
	});
	styles.push('styleguide/scss/*.scss');
	gulp.watch(styles, ['css:styleguide']);
});


// deploy to github pages
var deploy = require('gulp-gh-pages');

gulp.task('deploy:styleguide', ['js:styleguide', 'css:styleguide'], function () {
	var options = Object.assign({cacheDir: 'styleguide/.tmp'}, require('./styleguide/deploy.json').options);
	return gulp.src(['styleguide/index.html', 'styleguide/dist/**/*', 'styleguide/lib/**/*'], {base: 'styleguide'})
		.pipe(deploy(options));
});
