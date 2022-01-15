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
  const { comments } = useContext(dataContext);
  const { id, madeBy, content, createdAt, score, onNewUpdateHandler } = props;
  const [addInputComment, setAddInputComment] = useState([]);
  const [newInput, setNewInput] = useState(false);
  const replyComment = useRef();

  const findCommentPerId = () => comments.find((comment) => comment.id === id);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    findCommentPerId().replies.push(
      generateCommentTemplate(replyComment.current.value, data.currentUser)
    );

    // props.onNewUpdateHandler();
    console.log(dataContext);
  };

  //Renders a new InputComment for a reply
  const replyButtonHandler = function () {
    setNewInput(true);
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
      {newInput && addInputComment}
    </Fragment>
  );
};

export default Comment;
