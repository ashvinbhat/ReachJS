import "./HomeScreen.css";
import React from "react";

import { Map } from "react-map-gl";
import maplibregl from "maplibre-gl";
function HomeScreen() {
  const openInNewTab = (url) => {
    window.open(url, "_self", "noopener,noreferrer");
  };

  return (
    <div>
      <h2>Map</h2>
      <div
        className="map-container"
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
      <h2>Vendors</h2>
      <ul>
        <li>
          <div>
            <h3>Vendor</h3>
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt="FRUITS"
            />
          </div>
        </li>
        <li>
          <div>
            <h3>Vendor</h3>
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt="FRUITS"
            />
          </div>
        </li>
        <li>
          <div>
            <h3>Vendor</h3>
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt="FRUITS"
            />
          </div>
        </li>
        <li>
          <div>
            <h3>Vendor</h3>
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

export default HomeScreen;
