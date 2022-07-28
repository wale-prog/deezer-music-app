import propTypes from 'prop-types';

const ArtistTile = ({ data: artist }) => (
  <div>
    <img src={artist.artist.picture_medium} alt={artist.artist.name} />
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

ArtistTile.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
};
export default ArtistTile;
