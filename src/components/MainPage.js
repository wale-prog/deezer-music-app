import { useSelector } from 'react-redux';
import { useSearchParams, Link } from 'react-router-dom';
import ArtistTile from './ArtistsTile';
import './MainPage.css';

const MainPage = () => {
  const charts = useSelector((state) => state.charts);
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
            const chartTitle = item.title.toLowerCase();
            return chartTitle.startsWith(filter.toLocaleLowerCase());
          })
          .map((item) => (
            <Link key={item.id} to={`/${item.title}`}>
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
