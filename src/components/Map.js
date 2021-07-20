import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
  boder: "2px solid pink"
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyA8gA7OUb996h1q7XN3SFXT9LVY-uHC4EU">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
