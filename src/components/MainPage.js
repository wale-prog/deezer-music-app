import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams, Link } from 'react-router-dom';
import { getChart } from '../redux/ChartsSlice';
import ArtistTile from './ArtistTile';

const MainPage = () => {
  const charts = useSelector((state) => state.charts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (charts.length === 0) {
      dispatch(getChart());
    }
  }, []);

  const [search, setSearch] = useSearchParams();

  return (
    <div className="main-page">
      <input
        className="search-bar"
        type="text"
        value={search.get('filter') || ''}
        placeholder="Search music by title..."
        onChange={(event) => {
          const filter = event.target.value;
          if (filter) {
            setSearch({ filter });
          } else {
            setSearch({});
          }
        }}
      />

      <div className="artist-tile">
        {charts
          .filter((item) => {
            const filter = search.get('filter');
            if (!filter) return true;
            const artistName = item.title.toLowerCase();
            return artistName.startsWith(filter.toLocaleLowerCase());
          })
          .map((item) => (
            <Link key={item.id} to={`/${item.artist.name}`}>
              <ArtistTile
                key={item.id}
                data={item}
              />
            </Link>
          ))}
      </div>
    </div>

  );
};
export default MainPage;
