import { useSelector, useDispatch } from 'react-redux';
import { GiHamburgerMenu as Menu } from 'react-icons/gi';
import { BsMic, BsSearch } from 'react-icons/bs';
import { ChatsAction } from '../redux/ChartsSlice';
import logo from '../images/Colored_Full.png';
import './Header.css';

const Header = () => {
  const search = useSelector((state) => state.charts);
  console.log(search.option);
  const dispatch = useDispatch();

  const searchOption = () => {
    if (search) {
      dispatch(ChatsAction.hideSearch());
    } else if (!search) {
      (
        dispatch(ChatsAction.showSearch())
      );
    }
  };

  return (
    <div className="header-main">
      <div className="header">
        <Menu />
        <p>all time charts</p>
        <div>
          <BsMic className="mic" />
          <BsSearch onClick={searchOption} />
        </div>
      </div>
      <div className="mid-head">
        <div className="tracks">
          <p>{search.length}</p>
          <p>Tracks</p>
        </div>
        <div className="deezer-logo">
          <p className="deezer-text">Powered by</p>
          <img style={{ width: '100px', marginRight: '24px' }} src={logo} alt="Deezer logo" />
        </div>
      </div>

    </div>
  );
};
export default Header;
