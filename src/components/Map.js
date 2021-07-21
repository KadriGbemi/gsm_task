import { GoogleMap, LoadScript } from "@react-google-maps/api";

import React, { useState, useCallback, useEffect } from "react";
import Markers from "./Markers";

const containerStyle = {
  width: "100%",
  height: "600px",
  boder: "2px solid pink",
};
function Map({ address, tasks }) {
  const [map, setMap] = useState(null);
  const onLoad = useCallback((map) => setMap(map), []);
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

  useEffect(() => {
    if (map && point) {
      let listener = new window.google.maps.event.addListener(
        map,
        "idle",
        function () {
          if (map.getZoom() > 16) map.setZoom(16);
          new window.google.maps.event.removeListener(listener);
        }
      );
    }
  }, [map, point]);
  useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend({
        lat: 59.440263,
        lng: 24.730345,
      });
      map.zoom = 10;
      tasks &&
        tasks.length &&
        tasks.forEach((task) => {
          const coordinates =
            task &&
            task.address &&
            task.address.location &&
            task.address.location.coordinates;
          coordinates &&
            coordinates.length &&
            bounds.extend({
              lat: coordinates[1],
              lng: coordinates[0],
            });
        });
      map.fitBounds(bounds);
    }
  }, [map, tasks]);
  return (
    <LoadScript googleMapsApiKey="AIzaSyA8gA7OUb996h1q7XN3SFXT9LVY-uHC4EU">
      <GoogleMap mapContainerStyle={containerStyle} onLoad={onLoad}>
        <Markers point={point} tasks={tasks}/>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
