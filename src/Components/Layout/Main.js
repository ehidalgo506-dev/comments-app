import React, { Fragment, useContext, useRef, useState } from 'react';
import generateCommentTemplate from '../../generateCommentTemplate';
import GlobalState from '../../store/GlobalState';
import Comment from '../Comment/Comment';
import InputComment from '../Comment/InputComment';
import RepliesContainer from '../Comment/RepliesContainer';
import ModalWindow from '../ModalWindow/ModalWindow';
import Card from '../UI/Card';
import styles from './Main.module.scss';

const Main = (props) => {
  const mainData = useContext(GlobalState);
  const [data, setNewData] = mainData;
  const { comments } = data;
  const newComment = useRef();

  const postNewComment = (e) => {
    e.preventDefault();
    comments.unshift(
      generateCommentTemplate(
        newComment.current.value,
        data.currentUser.currentUser
      )
    );

    //Updates the Global State with the new comment added
    setNewData((prevState) => ({
      ...prevState,
    }));
  };

  const RenderRepliesRecursive = (comments) => {
    const { data } = comments;

    if (data.length === 0) return null;

    return data.map((reply) => {
      return (
        <RepliesContainer key={reply.id}>
          <Card>
            <Comment comment={reply} isReply={true} />
          </Card>
          <RenderRepliesRecursive data={reply.replies} />
        </RepliesContainer>
      );
    });
  };

  return (
    <main className={styles.main}>
      {comments.map((comment) => {
        return (
          <Fragment key={comment.id}>
            <Card key={comment.id}>
              <Comment comment={comment} score={comment.score} />
            </Card>
            {comment.replies.length !== 0 && (
              <RenderRepliesRecursive data={comment.replies} />
            )}
          </Fragment>
        );
      })}
      <Card>
        <InputComment onSubmit={postNewComment} compRef={newComment} />
      </Card>
    </main>
  );
};

export default Main;
