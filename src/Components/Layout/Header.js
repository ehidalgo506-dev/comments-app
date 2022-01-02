import React from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button';

const Header = (props) => {
  const signOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;

  return (
    <header className={styles.header}>
      <h1>Winux</h1>
      <div>
        <p>Log in!</p>
        <Button>Sign out {signOutIcon}</Button>
      </div>
    </header>
  );
};

export default Header;
