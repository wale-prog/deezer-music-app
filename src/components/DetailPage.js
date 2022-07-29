import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { BsArrowLeft as ArrowLeft } from 'react-icons/bs';

const DetailPage = () => {
  const param = useParams();
  const charts = useSelector((state) => state.charts);
  const artist = charts.filter((item) => item.title === param.chartTitle);

  return (
    <div>
      <Link
        to="/"
        style={
        {
          display: 'flex', alignItems: 'center', gap: '2px', textDecoration: 'none',
        }
        }
      >
        <ArrowLeft />
        <p>back</p>
      </Link>
      <img src={artist[0].artist.picture_medium} alt={artist[0].artist.name} />
    </div>
  );
};
export default DetailPage;
