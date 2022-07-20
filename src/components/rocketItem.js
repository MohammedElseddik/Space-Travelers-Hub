import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { rocketReserved } from '../redux/features/rocketSlice';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();

  const {
    id, name, description, flickr_images, reserved,
  } = rocket;

  const reserveRocketHandler = () => {
    dispatch(rocketReserved(id));
  };

  return (
    <div>
      <img src={flickr_images[0]} alt="rocket" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        {reserved ? (
          <button type="button">Cancel Reservation</button>
        ) : (
          <button type="button" onClick={reserveRocketHandler}>
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default RocketItem;
