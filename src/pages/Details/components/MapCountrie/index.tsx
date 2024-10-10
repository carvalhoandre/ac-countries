import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Place } from "./types";
import * as styles from "./styles";

import "leaflet/dist/leaflet.css";

const initialPosition = {
  lat: -23.5725631,
  lng: -46.8257264,
};

const OrderLocation = (place: Place) => {
  const [address] = React.useState<Place>({
    position: place.position || initialPosition,
  });

  return (
    <styles.Container>
      <styles.Content>
        <MapContainer
          center={address.position}
          zoom={3}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={address.position}>
            <Popup minWidth={90}>Unidade 01</Popup>
          </Marker>
        </MapContainer>
      </styles.Content>
    </styles.Container>
  );
};

export default OrderLocation;
