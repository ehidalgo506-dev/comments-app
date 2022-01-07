import React, { Fragment, useContext } from 'react';
import dataContext from '../../store/dataContext';
import ButtonScore from '../UI/ButtonScore';
import ReplyButton from '../UI/ReplyButton';
import styles from './Comment.module.scss';
import CommentInfo from './CommentInfo';

const Comment = (props) => {
  const { madeBy, content, createdAt, score } = props;
  return (
    <section className={styles.comment}>
      <CommentInfo
        commentText={content}
        madeBy={madeBy.username}
        date={createdAt}
        className={styles.info}
      />
      <ButtonScore score={score} className={styles.score} />
      <ReplyButton />
    </section>
  );
};

export default Comment;
