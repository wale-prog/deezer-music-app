import { useSelector } from 'react-redux';
import { GiHamburgerMenu as Menu } from 'react-icons/gi';
import { BsMic, BsSearch } from 'react-icons/bs';
import logo from '../images/Colored_Full_White.png';
import './Header.css';

const Header = () => {
  const charts = useSelector((state) => state.charts);

  return (
    <div className="header-main">
      <div className="header-s">
        <div className="header">
          <Menu />
          <p>All time charts</p>
          <div style={{ visibility: 'hidden' }}>
            <BsMic className="mic" />
            <BsSearch />
          </div>
        </div>
        <div className="mid-head">
          <div className="tracks">
            <p>
              {charts.length}
              {' '}
              Tracks
            </p>
          </div>
          <div className="deezer-logo">
            <p className="deezer-text">Powered by</p>
            <img style={{ width: '100px', marginRight: '24px' }} src={logo} alt="Deezer logo" />
          </div>
        </div>
      </div>

    </div>
  );
};
export default Header;
