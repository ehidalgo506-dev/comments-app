import React, { Fragment, useContext, useRef, useState } from 'react';
import GlobalState from '../../store/GlobalState';
import ButtonScore from '../UI/ButtonScore';
import ReplyButton from '../UI/ReplyButton';
import styles from './Comment.module.scss';
import CommentInfo from './CommentInfo';
import InputComment from './InputComment';
import generateCommentTemplate from '../../generateCommentTemplate';

const Comment = (props) => {
  //Context info
  const data = useContext(GlobalState);
  const [mainData, setMainData] = data;
  // Props info
  const { comment } = props;
  //State info
  const [addInputComment, setAddInputComment] = useState([]);
  const [newInput, setNewInput] = useState(false);
  const replyComment = useRef();

  //Add the new comment/reply to the parent comment
  const onReplySubmitHandler = (e) => {
    e.preventDefault();
    comment.replies.push(
      generateCommentTemplate(
        replyComment.current.value,
        mainData.currentUser.currentUser
      )
    );

    setMainData((prevState) => ({ ...prevState }));
    setNewInput(false);
  };

  //Toggle the delete button to all posts made only by the current user
  const isCurrentUserSamePostUser = () => {
    const currentUser = mainData.currentUser.currentUser;
    const postUser = comment.user.username;
    if (currentUser === postUser) return true;
  };

  //Toggle the text area to make another reply
  const cancelInputRender = (status) => setNewInput(status);

  //Renders a new InputComment for a reply
  const replyButtonHandler = function () {
    setNewInput(true);
    setAddInputComment([
      <InputComment
        key={addInputComment.length}
        onSubmit={onReplySubmitHandler}
        compRef={replyComment}
        onCancelInputRender={cancelInputRender}
      />,
    ]);
  };

  const deleteButtonHandler = function () {
    console.log(comment);
  };

  return (
    <Fragment>
      <section className={styles.comment}>
        <CommentInfo comment={comment} className={styles.info} />
        <ButtonScore score={comment.score} className={styles.score} />
        <div className={styles['action--buttons']}>
          {isCurrentUserSamePostUser() && (
            <ReplyButton onClick={deleteButtonHandler} type={'delete'} />
          )}
          <ReplyButton onClick={replyButtonHandler} type={'reply'} />
        </div>
      </section>
      {newInput && addInputComment}
    </Fragment>
  );
};

export default Comment;
