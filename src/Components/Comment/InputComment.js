import React, { useContext, useRef } from 'react';
import styles from './InputComment.module.scss';
import testImg from '../../images/avatars/image-amyrobson.png';
import Button from '../UI/Button';
import dataContext from '../../store/dataContext';

const InputComment = (props) => {
  const { comments } = useContext(dataContext);
  const newComment = useRef();

  const addNewCommentHandler = (props) => {
    comments.push(newComment.current.value);
  };

  return (
    <div className={styles.inputComment}>
      <img src={testImg} alt='User profile avatar' />
      <textarea
        cols='30'
        rows='5'
        placeholder='Add a comment...'
        ref={newComment}
      ></textarea>
      <Button onClick={addNewCommentHandler}>Send</Button>
    </div>
  );
};

export default InputComment;
