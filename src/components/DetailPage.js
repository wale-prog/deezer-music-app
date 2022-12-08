import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { BsArrowLeft as ArrowLeft } from 'react-icons/bs';
import './DetailPage.css';

const DetailPage = () => {
  const param = useParams();
  const charts = useSelector((state) => state.charts);
  const artist = charts.filter((item) => item.title === param.chartTitle);

  return (
    <div className="artist-detail">
      <Link
        to="/"
        style={
        {
          display: 'flex', alignItems: 'center', gap: '2px', textDecoration: 'none',
        }
        }
      >
        <div className="arrow-left">
          <ArrowLeft />
          <p>back to homepage</p>
        </div>
      </Link>
      <div className="details">
        <img style={{ width: '100%' }} src={artist[0].artist.picture_medium} alt={artist[0].artist.name} />
        <h2 style={{ margin: '8px 12px 12px', textAlign: 'center' }}>{artist[0].artist.name}</h2>
        <div className="detail">
          <div>
            <h2>
              Album:
              {' '}
            </h2>
            <p>
              {' '}
              {artist[0].album.title}
            </p>
          </div>

          <span>
            Preview
            {' '}
            <a
              style={{
                color: '#315392', textDecoration: 'none', letterSpacing: '1px', padding: '2px 6px', backgroundColor: '#587fc9', borderRadius: '7px',
              }}
              href={artist[0].preview}
              target="__blank"
            >
              here
            </a>
          </span>
          <p>
            Duration =&gt;
            {'  '}
            {(artist[0].duration / 100).toString().replace('.', ':')}
            {' '}
            mins
          </p>
          <p>
            Explicit content
            {artist[0].explicit_lyrics ? <span>: Yes</span> : <span>: No</span>}
          </p>
          <p>
            Listen
            {' '}
            <a href={artist[0].link} target="__blank">here</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
