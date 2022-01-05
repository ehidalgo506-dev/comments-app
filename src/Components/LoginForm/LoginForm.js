import React, { useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './LoginForm.module.scss';

const LoginForm = (props) => {
  const {
    data: { registeredUsers },
  } = props;

  const inputUsername = useRef();
  const inputPassword = useRef();

  const registerUserHandler = (e) => {
    e.preventDefault();
    const username = inputUsername.current.value;
    const password = +inputPassword.current.value;

    const duplicateUsername = registeredUsers.find(
      (user) => user.username === username
    );

    if (duplicateUsername) {
      alert('This user already exists, please try another one');
    }

    if (!duplicateUsername) {
      props.onAddNewUser({ username, password });
      props.onGetUserSubmited(true);
    }
  };

  const checkForExistingUser = () => {
    const username = inputUsername.current.value;
    const password = +inputPassword.current.value;
    return (
      registeredUsers.find((user) => user.username === username) &&
      registeredUsers.find((user) => user.password === password)
    );
  };

  const loginUserHandler = (e) => {
    e.preventDefault();

    const isFound = checkForExistingUser();

    if (isFound) {
      localStorage.setItem('isLogged', true);
      localStorage.setItem('currentUser', isFound.username);
      props.onGetUserSubmited(isFound);
    }

    if (!isFound) {
      alert('Username or password incorrect');
    }
  };

  return (
    <Card className={styles.loginCard}>
      <h2 className={styles['form-header']}>Hellow! Please LogIn </h2>
      <form className={styles.form}>
        <div className={styles.formControl}>
          <label htmlFor='inputUsername'>Username:</label>
          <input type='text' id='inputUsername' ref={inputUsername} />
        </div>
        <div className={styles.formControl}>
          <label htmlFor='inputPassword'>Password:</label>
          <input type='password' id='inputPassword' ref={inputPassword} />
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
