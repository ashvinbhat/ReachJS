import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomeScreen from "./screens/HomeScreen";
import Categories from "./screens/Categories";
import Sellers from "./screens/Sellers";
import Map from "./screens/Map";
import About from "./screens/About";
import Register from "./screens/Categories";
import Support from "./screens/Support";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
