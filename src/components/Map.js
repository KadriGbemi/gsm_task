import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React, { useState, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "600px",
  boder: "2px solid pink",
};

function Map({ address }) {
  const [center, setCenter] = useState({ lat: 59.4370, lng: 24.7536 });
  useEffect(() => {
    console.log("Map address", address);
    if (address && address.coordinates && address.coordinates.length) {
      const [latitude, long] = address.coordinates;

      setCenter({
        lat: latitude || 44.96323,
        lng: long || 11.62537,
      });
    }
  }, [address]);
  return (
    console.log("Center", center),
    (
      <LoadScript googleMapsApiKey="AIzaSyA8gA7OUb996h1q7XN3SFXT9LVY-uHC4EU">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    )
  );
}

export default Map;
