import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import relativeUrl from '../../utils/commons';

import Logo from '../../assets/logo.png';
import styles from './Navbar.module.css';

const NavBar = () => {
  const [active, setActive] = useState(relativeUrl());

  const setActiveTab = ({ target }) => {
    setActive(relativeUrl(target.href));
  };

  return (
    <header className={styles['herder-nav']}>
      <nav className={styles.navbar}>
        <NavLink
          className={styles['logo-container']}
          to="/"
          onClick={setActiveTab}
        >
          <img className={styles.logo} src={Logo} alt="logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </NavLink>
        <ul className={styles.nav__items}>
          <li>
            <NavLink
              to="/rockets"
              onClick={setActiveTab}
              className={active === 'rock' ? styles.Active : ''}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              onClick={setActiveTab}
              className={active === 'miss' ? styles.Active : ''}
            >
              Missions
            </NavLink>
          </li>
          <li className={styles['vertical-line']} />
          <li>
            <NavLink
              to="/profile"
              onClick={setActiveTab}
              className={active === 'prof' ? styles.Active : ''}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
