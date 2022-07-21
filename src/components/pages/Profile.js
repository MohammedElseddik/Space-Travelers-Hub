import { useSelector } from 'react-redux';
import { selectAllJoined } from '../../redux/effects/missionEffects';
import { selectAllJoinedRockets } from '../../redux/effects/rocketEffects';

import styles from './Profile.module.css';

const Profile = () => {
  const { missions } = useSelector(selectAllJoined);
  const { rockets } = useSelector(selectAllJoinedRockets);
  const isRocktesEmapty = rockets.length === 0;
  const isMissionsEmpty = missions.length === 0;

  return (
    <section className={styles.Profile}>
      <div>
        <h2>My Missions</h2>
        {!isMissionsEmpty && (
          <ul>
            {missions.map(({ mission_name, mission_id }) => (
              <li key={mission_id}>{mission_name}</li>
            ))}
          </ul>
        )}
        {isMissionsEmpty && <p>No Missions</p>}
      </div>
      <div>
        <h2>My Rockets</h2>
        {!isRocktesEmapty && (
          <ul>
            {rockets.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        )}
        {isRocktesEmapty && <p>No Missions</p>}
      </div>
    </section>
  );
};

export default Profile;
