import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomeScreen from "./pages/HomeScreen";
import Categories from "./pages/Categories";
import Sellers from "./pages/Sellers";
import Map from "./pages/Map";
import About from "./pages/About";
import Register from "./pages/Register";
import Support from "./pages/Support";

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
