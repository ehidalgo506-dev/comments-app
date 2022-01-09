import React, { useContext, useRef, useState } from 'react';
import styles from './InputComment.module.scss';
import testImg from '../../images/avatars/image-amyrobson.png';
import Button from '../UI/Button';
import dataContext from '../../store/dataContext';

const InputComment = (props) => {
  const { comments } = useContext(dataContext);
  const todayDate = new Date().toLocaleDateString('en-US');

  const { currentUser } = useContext(dataContext);

  const objCommentTemplate = () => {
    return {
      id: Math.random(),
      content: newComment.current.value,
      createdAt: todayDate,
      score: 0,
      user: {
        username: currentUser,
      },
      replies: [],
    };
  };

  const newComment = useRef();

  const addNewCommentHandler = () => {
    if (props.isReply) {
      comments.replies.push(objCommentTemplate());
    } else {
      props.onNewUpdate([...comments, objCommentTemplate()]);
      comments.push(objCommentTemplate());
    }
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
