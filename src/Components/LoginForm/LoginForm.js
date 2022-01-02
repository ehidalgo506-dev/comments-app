import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './LoginForm.module.scss';

const LoginForm = (props) => {
  return (
    <Card className={styles.loginCard}>
      <h2 className={styles['form-header']}>Hellow! Please LogIn </h2>
      <form className={styles.form}>
        <div className={styles.formControl}>
          <label htmlFor='inputUsername'>Username:</label>
          <input type='text' id='inputUsername' />
        </div>
        <div className={styles.formControl}>
          <label htmlFor='inputPassword'>Password:</label>
          <input type='password' id='inputPassword' />
        </div>
        <div className={styles.formButtons}>
          <Button className={styles.buttonRegister}>Register</Button>
          <Button className={styles.buttonLogin}>Log in</Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
