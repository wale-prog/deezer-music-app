import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import DetailPage from './components/DetailPage';
import Header from './components/Header';

const App = () => (

  <div>
    <Header />
    <Routes>
      <Route path="/" exact="true" element={<MainPage />} />
    </Routes>
    <Routes>
      <Route path=":chartTitle" exact="true" element={<DetailPage />} />
    </Routes>
  </div>
);

export default App;
