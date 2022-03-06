import React, { Fragment, useContext, useRef, useState } from 'react';
import GlobalState from '../../store/GlobalState';
import ButtonScore from '../UI/ButtonScore';
import ActionButton from '../UI/ActionButton';
import styles from './Comment.module.scss';
import CommentInfo from './CommentInfo';
import InputComment from './InputComment';
import generateCommentTemplate from '../../generateCommentTemplate';
import ModalWindow from '../ModalWindow/ModalWindow';

const Comment = (props) => {
  //Context info
  const data = useContext(GlobalState);
  const [mainData, setMainData] = data;
  // Props info
  let { comment } = props;
  //State info
  const [addInputComment, setAddInputComment] = useState([]);
  const [newInput, setNewInput] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
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

    isCurrentUserSamePostUser();
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

  const closeModalHandler = () => setActiveModal(false);

  const deleteComment = function (data, id) {
    for (let i in data) {
      if (data[i].id !== id && data[i].replies)
        deleteComment(data[i].replies, id);
      else delete data[i];
    }

    setMainData((prevState) => ({ ...prevState }));
    console.log(mainData.comments);
  };

  const deleteButtonHandler = () => {
    setActiveModal(true);
    // deleteComment(mainData.comments, comment.id);
  };

  return (
    <>
      {activeModal && (
        <ModalWindow
          message='Are you sure you want to delete the message?'
          closeModal={closeModalHandler}
          onContinue={() => deleteComment(mainData.comments, comment.id)}
        />
      )}
      <section className={styles.comment}>
        <CommentInfo comment={comment} className={styles.info} />
        <ButtonScore score={comment.score} className={styles.score} />
        <div className={styles['action--buttons']}>
          {isCurrentUserSamePostUser() && (
            <ActionButton onClick={deleteButtonHandler} type={'delete'} />
          )}
          <ActionButton onClick={replyButtonHandler} type={'reply'} />
        </div>
      </section>
      {newInput && addInputComment}
    </>
  );
};

export default Comment;
