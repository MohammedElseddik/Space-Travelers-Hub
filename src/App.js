import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import Rockets from './components/rocket-page/Rockets';
import NotFound from './components/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<NotFound />} />
        <Route exact path="/rockets" element={<Rockets />} />
        <Route path="/profile" element={<NotFound />} />
        <Route path="/missions" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;