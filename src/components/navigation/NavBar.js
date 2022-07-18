import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const NavBar = () => (
  <header>
    <nav>
      <Link exact to="/">
        <img src={Logo} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </Link>
      <ul>
        <li>
          <Link to="/rockets">Rockets</Link>
        </li>
        <li>
          <Link to="/missions">Missions</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
