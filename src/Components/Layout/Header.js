import React from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button';
import { useContext } from 'react/cjs/react.development';
import dataContext from '../../store/dataContext';

const Header = (props) => {
  const signOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;
  const getCurrentUserLocalStorage = localStorage.getItem('currentUser');
  const mainData = useContext(dataContext);

  const logoutUser = () => {
    localStorage.removeItem('isLogged');
    localStorage.removeItem('currentUser');
    props.onLogout(false);
    mainData.currentUser = {};
    console.log(mainData);
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
