import React, { Fragment, useContext, useRef, useState } from 'react';
import dataContext from '../../store/dataContext';
import ButtonScore from '../UI/ButtonScore';
import ReplyButton from '../UI/ReplyButton';
import styles from './Comment.module.scss';
import CommentInfo from './CommentInfo';
import InputComment from './InputComment';
import generateCommentTemplate from '../../generateCommentTemplate';

const Comment = (props) => {
  const data = useContext(dataContext);
  const { id, madeBy, content, createdAt, score } = props;
  const { comments } = useContext(dataContext);
  const [addInputComment, setAddInputComment] = useState([]);

  const replyComment = useRef();

  const findCommentPerId = () => comments.find((comment) => comment.id === id);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    findCommentPerId().replies.push(
      generateCommentTemplate(replyComment.current.value, data.currentUser)
    );

    console.log(findCommentPerId());
  };

  //Renders a new InputComment for a reply
  const replyButtonHandler = function () {
    setAddInputComment([
      <InputComment
        key={addInputComment.length}
        onSubmit={onSubmitHandler}
        compRef={replyComment}
      />,
    ]);
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
