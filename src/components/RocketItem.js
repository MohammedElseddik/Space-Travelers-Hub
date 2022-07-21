import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  rocketCanceled,
  rocketReserved,
} from '../redux/features/rocketSlice';

import styles from './RocketItem.module.css';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(rocketCanceled(rocket.id));
  };

  const reserveRocketHandler = () => {
    dispatch(rocketReserved(rocket.id));
  };

  const {
    name, details, imageUrl, reserved,
  } = rocket;

  return (
    <div className={styles.RocketItem}>
      <img src={imageUrl} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>
          {reserved && <span>Reserved</span>}
          {details}
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
    details: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketItem;
