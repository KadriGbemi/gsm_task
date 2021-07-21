import React from "react";
import { Marker } from "@react-google-maps/api";
function Markers({ point, tasks }) {
  return (
    <>
      {point && <Marker position={point} />}
      {tasks &&
        tasks.length &&
        tasks.map((task) => {
          const coordinates =
            task &&
            task.address &&
            task.address.location &&
            task.address.location.coordinates &&
            task.address.location.coordinates.length &&
            task.address.location.coordinates;
          return (
            coordinates &&
            coordinates.length && (
              <Marker
                key={task.id}
                position={{
                  lat: coordinates[1],
                  lng: coordinates[0],
                }}
              />
            )
          );
        })}
    </>
  );
}

export default Markers;
