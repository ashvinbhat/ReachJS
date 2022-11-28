import "../css/styling.css";
import { Map } from "react-map-gl";
import maplibregl from "maplibre-gl";
import { Link, resolvePath, useMatch, useResolvedPath } from "react-router-dom";

function HomeScreen() {
  const openInNewTab = (url) => {
    window.open(url, "_self", "noopener,noreferrer");
  };

  return (
    <div>
      <h2>MAP</h2>
      <div
        className="map-container"
        onClick={() => openInNewTab("/map")}
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
      <div className="container-category">
      <Link to="/Fruits">
        <div className="categoryCard fruit"><p className="textmiddle">FRUITS</p></div>
      </Link>

      <Link to="/categories/Vegetables">
        <div className="categoryCard vegetable"><p className="textmiddle">VEGETABLES</p></div>
      </Link>

      <Link to="/categories/Greens">
        <div className="categoryCard greens"><p className="textmiddle">GREENS</p></div>
      </Link>

      <Link to="/categories/Groceries">
        <div className="categoryCard groceries"><p className="textmiddle">GROCERIES</p></div>
      </Link>

      <Link to="/categories/Accessories">
        <div className="categoryCard accessories"><p className="textmiddle">ACCESSORIES</p></div>
      </Link>

      <Link to="/categories/HomeEssentials">
        <div className="categoryCard homessentials"><p className="textmiddle">HOME ESSENTIALS</p></div>
      </Link>
      </div>
      <br></br>
      <br></br>
      <div className="footer">
          <div className="footer-card links">
            <h4>ReachJS</h4>
            <p className="footer-cardp">all rights reserved</p>
          <CustomLink to="/categories">Categories</CustomLink>
          <CustomLink to="/sellers">Sellers</CustomLink>
          <CustomLink to="/map">Map</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/register">Register</CustomLink>
          <CustomLink to="/support">Support</CustomLink>
          <br/>
          </div>
          <div className="footer-card"></div>
      </div>
    </div>
  );
}

export default HomeScreen;


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active li-space" : "li-space"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

/*

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

      
*/