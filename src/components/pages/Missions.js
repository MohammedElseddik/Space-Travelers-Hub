import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MissionItem from "../MissionItem";
import fetchMissionData from "../../apis/missionsApi";

import styles from "./Missions.module.css";

const Missions = () => {
  const { missions, isLoading } = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading === false) {
      dispatch(fetchMissionData());
    }
  }, []);

  return (
    <div className={styles.missions}>
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
            <MissionItem key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
