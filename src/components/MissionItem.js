import React from "react";
import PropTypes from "prop-types";

const MissionItem = (props) => {
  const { mission_name, mission_id, mission_description } = props;

  return (
    <tr id={mission_id}>
      <td>{mission_name}</td>
      <td>{mission_description}</td>
      <td>
        <button type="button">Active Member</button>
      </td>
      <td>
        <button type="button">Join Mission</button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission_name: PropTypes.string.isRequired,
  mission_id: PropTypes.string.isRequired,
  mission_description: PropTypes.string.isRequired,
};

export default MissionItem;
