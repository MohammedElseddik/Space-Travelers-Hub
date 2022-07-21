import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { missionJoined, missionLeaved } from '../redux/features/missionSlice';

import './MissionItem.css';

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
      <td className="name">{mission_name}</td>
      <td className="description">{description}</td>
      <td>
        {reserved ? (
          <span className="status active">Active Member</span>
        ) : (
          <span className="status not-member">NOT A MEMBER</span>
        )}
      </td>
      <td>
        {reserved ? (
          <button
            type="button"
            className="leave-btn"
            onClick={LeaveMissionHandler}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className="join-btn"
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
