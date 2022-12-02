import { Map, MapMarker } from "react-kakao-maps-sdk";

const MapViewer = ({ lat, lng }) => {
  return (
    <Map
      center={{ lat: lat, lng: lng }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: lat, lng: lng }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
};

export default MapViewer;
