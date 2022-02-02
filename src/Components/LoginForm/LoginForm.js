import React, { useContext, useRef } from 'react';
import { useState } from 'react/cjs/react.development';
import dataContext from '../../store/GlobalState';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './LoginForm.module.scss';

const LoginForm = (props) => {
  const data = useContext(dataContext);
  const [mainData, setNewData] = data;
  const { registeredUsers } = mainData;

  //Inputs states
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const inputUsernameValueHandler = (e) => {
    setInputUsername(e.target.value);
  };
  const inputPasswordValueHandler = (e) => setInputPassword(e.target.value);

  const registerUserHandler = (e) => {
    e.preventDefault();

    const isDuplicateUsername = registeredUsers.find(
      (user) => user.username === inputUsername
    );

    if (isDuplicateUsername)
      alert('This user already exists, please try another one');

    if (!isDuplicateUsername)
      mainData.registeredUsers.push({
        username: inputUsername,
        password: inputPassword,
      });
  };

  const checkForExistingUser = () => {
    return registeredUsers.find(
      (user) =>
        user.username === inputUsername && user.password === inputPassword
    );
  };

  const loginUserHandler = (e) => {
    e.preventDefault();

    const isFound = checkForExistingUser();
    if (!isFound) {
      alert('Username or password incorrect');
      return;
    }
    //Creating Local Storage
    localStorage.setItem('isLogged', true);
    localStorage.setItem('currentUser', inputUsername);
    console.log(mainData);
    mainData.currentUser = { ...isFound };
    props.onGetUserSubmitted(true);
  };

  return (
    <Card className={styles.loginCard}>
      <h2 className={styles['form-header']}>Hellow! Please Log in </h2>
      <form className={styles.form}>
        <div className={styles.formControl}>
          <label htmlFor='inputUsername'>Username:</label>
          <input
            type='text'
            id='inputUsername'
            value={inputUsername}
            onChange={(e) => inputUsernameValueHandler(e)}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor='inputPassword'>Password:</label>
          <input
            type='password'
            id='inputPassword'
            value={inputPassword}
            onChange={(e) => inputPasswordValueHandler(e)}
          />
        </div>
        <div className={styles.formButtons}>
          <Button
            className={styles.buttonRegister}
            onClick={registerUserHandler}
          >
            Register
          </Button>
          <Button className={styles.buttonLogin} onClick={loginUserHandler}>
            Log in
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
