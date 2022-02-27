import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      className={`${styles.buttonComp} ${styles[props.className]} ${
        styles[props.type]
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
