import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import React, { useState, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "600px",
  boder: "2px solid pink",
};

const center = { lat: 59.437, lng: 24.7536 };
function Map({ address }) {
  const [point, setPoint] = useState({ lat: 59.437, lng: 24.7536 });
  useEffect(() => {
    // console.log("Map address", address);
    if (address && address.coordinates && address.coordinates.length) {
      const [long, latitude ] = address.coordinates;

      setPoint({
        lat: latitude || 44.96323,
        lng: long || 11.62537,
      });
    }
  }, [address]);
  return (
    console.log("Center", point),
    (
      <LoadScript googleMapsApiKey="AIzaSyA8gA7OUb996h1q7XN3SFXT9LVY-uHC4EU">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
          <Marker position={point} />
        </GoogleMap>
      </LoadScript>
    )
  );
}

export default Map;
