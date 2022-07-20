import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionItem from './MissionItem';
import fetchMissionData from '../../apis/missionsApi';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionData());
  }, []);

  const { missionData } = useSelector((state) => state.mission);

  return (
    <div className="missionsPage">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>
              <div />
            </th>
          </tr>
        </thead>
        <tbody>
          {missionData.map((mission) => (
            <MissionItem
              key={mission.mission_id}
              mission_name={mission.mission_name}
              mission_id={mission.mission_id}
              mission_description={mission.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
