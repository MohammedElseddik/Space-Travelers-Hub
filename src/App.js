import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import Rockets from './components/pages/Rockets';
import Missions from './components/pages/Missions';
import Profile from './components/pages/Profile';
import NotFound from './components/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
