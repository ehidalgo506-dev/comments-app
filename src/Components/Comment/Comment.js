import React from 'react';
import ButtonScore from '../UI/ButtonScore';
import ReplyButton from '../UI/ReplyButton';
import styles from './Comment.module.scss';
import CommentInfo from './CommentInfo';

const Comment = (props) => {
  console.log(props);
  return (
    <section className={styles.comment}>
      <CommentInfo data={props.data} className={styles.info} />
      <ButtonScore className={styles.score} />
      <ReplyButton />
    </section>
  );
};

export default Comment;
