import PropTypes from 'prop-types';

const RocketItem = ({ rocket }) => (
  <div>
    <img src={rocket.flickr_images[0]} alt="rocket" />
    <div>
      <h2>{rocket.name}</h2>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default RocketItem;
