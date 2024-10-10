export type MapLocationData = {
  latitude: number;
  longitude: number;
  address: string;
};

export type Place = {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  };
};

export type mapLocationProps = {
  onChangeLocation: (location: MapLocationData) => void;
};
