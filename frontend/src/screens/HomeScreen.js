import "./HomeScreen.css";

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXNodmluYmhhdCIsImEiOiJjbGFqb3JhMHowZWZoM25xcXV0eTVzN2YyIn0.Ud804we1YqFbNo5WspD2-w";
export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(77.53480664584247);
  const [lat, setLat] = useState(12.934137959637118);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="sidebar">
      <h2>Map</h2>
      {/* Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} */}
      <div ref={mapContainer} className="map-container" />
      <h2>Categories</h2>
      <ul>
        <li>
          <div>
            <h3>FRUITS</h3>
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt="FRUITS"
            />
          </div>
        </li>
        <li>
          <div>
            <h3>FRUITS</h3>
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt="FRUITS"
            />
          </div>
        </li>
        <li>
          <div>
            <h3>FRUITS</h3>
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt="FRUITS"
            />
          </div>
        </li>
        <li>
          <div>
            <h3>FRUITS</h3>
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt="FRUITS"
            />
          </div>
        </li>
      </ul>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
