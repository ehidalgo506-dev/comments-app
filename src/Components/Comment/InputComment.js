import React, { useContext, useRef, useState } from 'react';
import styles from './InputComment.module.scss';
import testImg from '../../images/avatars/image-amyrobson.png';
import Button from '../UI/Button';

const InputComment = (props) => {
  return (
    <form className={styles.inputComment} onSubmit={props.onSubmit}>
      <img src={testImg} alt='User profile avatar' />
      <textarea
        cols='30'
        rows='5'
        placeholder='Add a comment...'
        ref={props.compRef}
        autoFocus
      ></textarea>
      <Button>Send</Button>
    </form>
  );
};

export default InputComment;
