import React from 'react';
import styles from './ButtonScore.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
const ButtonScore = (props) => {
  const plusIcon = <FontAwesomeIcon icon={faPlus} />;
  const minusIcon = <FontAwesomeIcon icon={faMinus} />;

  return (
    <div className={`${styles.buttonScore} ${props.className}`}>
      <button className={styles.buttonPlus}>{plusIcon}</button>
      <p>12</p>
      <button className={styles.buttonMinus}>{minusIcon}</button>
    </div>
  );
};

export default ButtonScore;
