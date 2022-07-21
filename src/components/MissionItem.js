import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { missionJoined, missionLeaved } from '../redux/features/missionSlice';

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
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>
        {reserved ? <span>Active Member</span> : <span>Leave Mission</span>}
      </td>
      <td>
        {reserved ? (
          <button type="button" onClick={LeaveMissionHandler}>
            Leave Mission
          </button>
        ) : (
          <button type="button" onClick={joinMissionHandler}>
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
