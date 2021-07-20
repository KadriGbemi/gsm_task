import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import React, { useState, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "600px",
  boder: "2px solid pink",
};

function Map({ address, tasks }) {
  const [point, setPoint] = useState({ lat: 59.440263, lng: 24.730345 });
  useEffect(() => {
    if (address && address.coordinates && address.coordinates.length) {
      const [long, latitude] = address.coordinates;
      setPoint({
        lat: latitude || 59.440263,
        lng: long || 24.730345,
      });
    }
  }, [address]);
  return (
    <LoadScript googleMapsApiKey="AIzaSyA8gA7OUb996h1q7XN3SFXT9LVY-uHC4EU">
      <GoogleMap mapContainerStyle={containerStyle} center={point} zoom={15}>
        <Marker position={point} />
        {tasks &&
          tasks.length &&
          tasks.map((task) => {
            const [long, latitude] =
              task &&
              task.address &&
              task.address.location &&
              task.address.location.coordinates;
            return (
              task &&
              task.address && (
                <Marker
                  key={task.id}
                  position={{
                    lat: latitude,
                    lng: long,
                  }}
                />
              )
            );
          })}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
