import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./pages/About";
import Categories from "./pages/Categories";
import HomeScreen from "./pages/HomeScreen";
import Map from "./pages/Map";
import Register from "./pages/Register";
import Sellers from "./pages/Sellers";
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
