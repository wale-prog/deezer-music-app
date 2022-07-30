import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
// import ArtistTile from './components/ArtistTile';

const App = () => (

  <div>
    <Routes>
      <Route path="/" exact="true" element={<MainPage />} />
    </Routes>
  </div>
);

export default App;
