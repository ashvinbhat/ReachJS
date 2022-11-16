import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomeScreen from "./screens/HomeScreen";
import Test from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <div>
            <a href="/" className="page-logo">ReachJS</a>
          </div>
          <nav>
            <ul>
              <li>Categories</li>
              <li>Sellers</li>
              <li>Map</li>
              <li>About</li>
              <li>Register</li>
              <li>Support</li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Test />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
