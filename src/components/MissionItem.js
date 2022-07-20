import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { missionJoined } from '../redux/features/missionSlice';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  const {
    mission_name, mission_id, description, reserved,
  } = mission;
  const [membership, actionable] = (
    reserved
      ? ['Active Member', 'Leave Mission']
      : ['NOT A MEMBER', 'Join Mission']
  );

  const onClick = () => {
    dispatch(missionJoined(mission_id));
  };

  return (
    <tr>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>
        <span>{membership}</span>
      </td>
      <td>
        <button type="button" onClick={onClick}>{actionable}</button>
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
