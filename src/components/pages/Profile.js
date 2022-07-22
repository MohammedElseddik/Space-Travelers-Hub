import { useSelector } from 'react-redux';
import selectOnlyReserved from '../../redux/effects/profileEffects';

import styles from './Profile.module.css';

const Profile = () => {
  const { missions, rockets } = useSelector(selectOnlyReserved);

  const isRocketsEmpty = rockets.length === 0;
  const isMissionsEmpty = missions.length === 0;

  return (
    <section className={styles.Profile}>
      <div className={styles.container}>
        <h2>My Missions</h2>
        {!isMissionsEmpty && (
          <ul>
            {missions.map(({ mission_name, mission_id }) => (
              <li key={mission_id}>{mission_name}</li>
            ))}
          </ul>
        )}
        {isMissionsEmpty && <p>No joined missions</p>}
      </div>

      <div className={styles.container}>
        <h2>My Rockets</h2>
        {!isRocketsEmpty && (
          <ul>
            {rockets.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        )}
        {isRocketsEmpty && <p>No joined rockets</p>}
      </div>
    </section>
  );
};

export default Profile;
