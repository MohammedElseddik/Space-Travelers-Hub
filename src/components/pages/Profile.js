import { useSelector } from 'react-redux';

import { selectAllJoinedRockets } from '../../redux/effects/rocketEffects';

const Profile = () => {
  const { rockets } = useSelector(selectAllJoinedRockets);
  const isRocktesEmapty = rockets.length === 0;

  return (
    <section>
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
