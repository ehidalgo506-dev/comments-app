import React, { Fragment, useContext, useState } from 'react';
import dataContext from '../../store/dataContext';
import ButtonScore from '../UI/ButtonScore';
import ReplyButton from '../UI/ReplyButton';
import styles from './Comment.module.scss';
import CommentInfo from './CommentInfo';
import InputComment from './InputComment';

const Comment = (props) => {
  const { madeBy, content, createdAt, score } = props;
  const [addInputComment, setAddInputComment] = useState([]);

  const replyButtonHandler = function () {
    setAddInputComment([<InputComment key={addInputComment.length} />]);
  };
  return (
    <Fragment>
      <section className={styles.comment}>
        <CommentInfo
          commentText={content}
          madeBy={madeBy.username}
          date={createdAt}
          className={styles.info}
        />
        <ButtonScore score={score} className={styles.score} />
        <ReplyButton onClick={replyButtonHandler} />
      </section>
      {addInputComment}
    </Fragment>
  );
};

export default Comment;
