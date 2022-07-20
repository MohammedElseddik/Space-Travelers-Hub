import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionItem from '../MissionItem';
import fetchMissionData from '../../apis/missionsApi';

const Missions = () => {
  const { missions, isLoading } = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading === false) {
      dispatch(fetchMissionData());
    }
  }, []);

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
          {missions.map((mission) => (
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
