interface Car {
  signs: Array<string>;
  side: "left" | "right";
}

interface Coin {
  name: string;
  symbol: string;
}

interface Demonym {
  f: string;
  m: string;
}

interface Flag {
  alt: string;
  png: string;
  svg: string;
}

export interface ICountrie {
  altSpellings: Array<string>;
  area: number;
  capital: Array<string>;
  capitalInfo: {
    latlng: Array<number>;
  };
  car: Car;
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: {
    png: string;
    svg: string;
  };
  continents: Array<string>;
  [currencyCode: string]: Coin;
  demonyms: Array<Demonym>;
  fifa: string;
  flag: string;
  flags: Flag;
  gini: { [year: number]: number };
  idd: { root: string; suffixes: Array<string> };
  independent: boolean;
  landlocked: boolean;
  languages: { [key: string]: string };
  latlng: Array<number>;
  maps: { googleMaps: string; openStreetMaps: string };
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: string };
  };
  population: number;
  postalCode: { format: string; regex: string };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: Array<string>;
  tld: Array<string>;
  translations: {
    [key: string]: { official: string; common: string };
  };
  unMember: boolean;
}
