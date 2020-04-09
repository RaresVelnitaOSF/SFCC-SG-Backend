

declare class Geolocation {
    available  :  Boolean;
    city  :  string;
    countryCode  :  string;
    countryName  :  string;
    latitude  :  number;
    longitude  :  number;
    metroCode  :  string;
    postalCode  :  string;
    regionCode  :  string;
    regionName  :  string;

    getCity() : string;
    getCountryCode() : string;
    getCountryName() : string;
    getLatitude() : number;
    getLongitude() : number;
    getMetroCode() : string;
    getPostalCode() : string;
    getRegionCode() : string;
    getRegionName() : string;
    isAvailable() : Boolean;
}

export = Geolocation;