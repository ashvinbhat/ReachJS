import { Map } from "react-map-gl";
import maplibregl from "maplibre-gl";

export default function MapPage() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      className="map-container-page"
      onClick={() => openInNewTab("https://www.google.com/maps")}
    >
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 77.53480664584247,
          latitude: 12.934137959637118,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100vh", borderRadius: "50px" }}
        mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=LdmU2sRXjPBQtW9tJa8G"
      />
    </div>
  );
}
