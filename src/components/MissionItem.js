import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { missionJoined, missionLeaved } from '../redux/features/missionSlice';

import styles from './MissionItem.module.css';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  const {
    mission_name, mission_id, description, reserved,
  } = mission;

  const joinMissionHandler = () => {
    dispatch(missionJoined(mission_id));
  };

  const LeaveMissionHandler = () => {
    dispatch(missionLeaved(mission_id));
  };

  return (
    <tr>
      <td className={styles.name}>{mission_name}</td>
      <td className={styles.description}>{description}</td>
      <td>
        {reserved ? (
          <span className={`${styles.status} ${styles.active}`}>
            Active Member
          </span>
        ) : (
          <span className={`${styles.status} ${styles.notmember}`}>
            NOT A MEMBER
          </span>
        )}
      </td>
      <td>
        {reserved ? (
          <button
            type="button"
            className={styles['leave-btn']}
            onClick={LeaveMissionHandler}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className={styles['join-btn']}
            onClick={joinMissionHandler}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    mission_id: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionItem;
