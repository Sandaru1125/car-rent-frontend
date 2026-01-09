import Home from './pages/Home.jsx';
import ViewCars from './pages/viewCars.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<ViewCars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
