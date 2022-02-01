import React from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button';
import { useContext } from 'react/cjs/react.development';
import GlobalState from '../../store/GlobalState';

const Header = (props) => {
  const signOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;
  // const getCurrentUserLocalStorage = localStorage.getItem('currentUser');
  const [mainData] = useContext(GlobalState);

  const logoutUser = () => {
    localStorage.removeItem('isLogged');
    localStorage.removeItem('currentUser');
    props.onLogout(false);
    mainData.currentUser.username = {};
    console.log(
      '🚀 ~ file: Header.js ~ line 19 ~ logoutUser ~ mainData',
      mainData.currentUser.username
    );
  };

  return (
    <header className={styles.header}>
      <h1>Winux</h1>
      <div>
        <p>
          {props.isLogged
            ? `Hello! ${mainData.currentUser.username}`
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
