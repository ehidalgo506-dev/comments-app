import React from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button';

const Header = (props) => {
  const signOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;
  const getCurrentUserLocalStorage = localStorage.getItem('currentUser');

  const logoutUser = () => {
    localStorage.removeItem('isLogged');
    props.onLogout(false);
  };

  return (
    <header className={styles.header}>
      <h1>Winux</h1>
      <div>
        <p>
          {props.isLogged
            ? `Hello! ${getCurrentUserLocalStorage}`
            : 'Please Log In'}
        </p>
        {props.isLogged && (
          <Button onClick={logoutUser}>Sign out {signOutIcon}</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
