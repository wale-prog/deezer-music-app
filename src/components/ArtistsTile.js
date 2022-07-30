import propTypes from 'prop-types';
import { BsArrowRightCircle as ArrowRight } from 'react-icons/bs';
import './ArtistsTile.css';

const ArtistTile = ({ data: artist }) => {
  const helperFunc = (result = [1]) => {
    if (result[result.length - 1] >= 50) {
      return result;
    }
    if (result[result.length - 1] % 2 !== 0) {
      result.push(result[result.length - 1] + 3);
    } else {
      result.push(result[result.length - 1] + 1);
    }
    helperFunc(result);
    return result;
  };

  const linkStyle = () => {
    const number = helperFunc();
    if (number.includes(artist.position)) {
      return {
        backgroundColor: 'rgb(65 103 176)',
      };
    }
    return {
      backgroundColor: 'rgb(63 98 164)',
    };
  };

  return (
    <div className="artists" style={linkStyle()}>
      <ArrowRight
        style={
          {
            position: 'relative',
            top: '25px',
            left: '160px',
          }
        }
      />
      <img
        src={artist.artist.picture_medium}
        alt={artist.artist.name}
        style={{ width: '100%', height: '150px' }}
      />
      <p>
        Song Title:
        {' '}
        {artist.title}
      </p>
      <p>
        Artist:
        {' '}
        {artist.artist.name}
      </p>
      <p>
        Ranking:
        {' '}
        {artist.position}
      </p>
    </div>
  );
};

ArtistTile.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
};
export default ArtistTile;
