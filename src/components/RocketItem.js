import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  rocketCancelled,
  rocketReserved,
} from '../redux/features/rocketSlice';

import styles from './RocketItem.module.css';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(rocketCancelled(rocket.id));
  };

  const reserveRocketHandler = () => {
    dispatch(rocketReserved(rocket.id));
  };

  const {
    name, description, flickr_images, reserved,
  } = rocket;

  return (
    <div className={styles.RocketItem}>
      <img src={flickr_images[0]} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>
          {reserved && <span>Reserved</span>}
          {description}
        </p>
        {reserved
          ? (
            <button type="button" onClick={onClick} reserved="true">
              Cancel Reservation
            </button>
          )
          : (
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
    reserved: PropTypes.bool,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default RocketItem;
