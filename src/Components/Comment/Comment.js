import React, { Fragment, useContext, useRef, useState } from 'react';
import GlobalState from '../../store/GlobalState';
import ButtonScore from '../UI/ButtonScore';
import ReplyButton from '../UI/ReplyButton';
import styles from './Comment.module.scss';
import CommentInfo from './CommentInfo';
import InputComment from './InputComment';
import generateCommentTemplate from '../../generateCommentTemplate';

const Comment = (props) => {
  const data = useContext(GlobalState);
  const [mainData, setMainData] = data;
  const { comments } = mainData;
  const { id, madeBy, content, createdAt, score } = props;
  const [addInputComment, setAddInputComment] = useState([]);
  const [newInput, setNewInput] = useState(false);
  const replyComment = useRef();

  const findCommentPerId = () => comments.find((comment) => comment.id === id);

  const onReplySubmitHandler = (e) => {
    e.preventDefault();
    findCommentPerId().replies.push(
      generateCommentTemplate(
        replyComment.current.value,
        mainData.currentUser.currentUser
      )
    );

    setMainData((prevState) => ({ ...prevState }));
    setNewInput(false);
  };

  //Renders a new InputComment for a reply
  const replyButtonHandler = function () {
    setNewInput(true);
    setAddInputComment([
      <InputComment
        key={addInputComment.length}
        onSubmit={onReplySubmitHandler}
        compRef={replyComment}
      />,
    ]);
  };

  return (
    <Fragment>
      <section className={styles.comment}>
        <CommentInfo
          commentText={content}
          madeBy={madeBy}
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
