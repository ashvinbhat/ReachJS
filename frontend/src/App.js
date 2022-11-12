import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <h1>
          <a href="/">My app heading</a>
        </h1>

        </header>
        <main>
          <Routes >
            <Route path="/" element={<HomeScreen />} /> 
          </Routes>


        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
