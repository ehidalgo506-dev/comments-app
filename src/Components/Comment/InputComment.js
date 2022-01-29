import React from 'react';
import styles from './InputComment.module.scss';
import testImg from '../../images/avatars/image-amyrobson.png';
import Button from '../UI/Button';
import { useState } from 'react/cjs/react.development';

const InputComment = (props) => {
  const [inputValue, setInputValue] = useState('');

  const inputValueHandler = (value) => setInputValue(value);
  const resetInputValueHandler = (e) => {
    e.preventDefault();
    setInputValue('');
    props.onCancelInputRender(false);
  };
  return (
    <form className={styles.inputComment}>
      <img src={testImg} alt='User profile avatar' />
      <textarea
        cols='30'
        rows='5'
        placeholder='Add a comment...'
        ref={props.compRef}
        autoFocus
        onChange={(e) => inputValueHandler(e.target.value)}
        value={inputValue}
      ></textarea>
      <div className={styles['button-container']}>
        <Button
          onClick={resetInputValueHandler}
          className={styles['btn-cancel']}
        >
          Cancel
        </Button>
        <Button onClick={props.onSubmit}>Send</Button>
      </div>
    </form>
  );
};

export default InputComment;
