import React from 'react';

const MissionItem = (props) => {
  const { mission_name, mission_description } = props;

  return (
    <tr>
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

export default MissionItem;
