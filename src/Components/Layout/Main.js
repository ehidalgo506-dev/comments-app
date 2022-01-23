import React, { Fragment, useContext, useRef, useState } from 'react';
import generateCommentTemplate from '../../generateCommentTemplate';
import GlobalState from '../../store/GlobalState';
import Comment from '../Comment/Comment';
import InputComment from '../Comment/InputComment';
import RepliesContainer from '../Comment/RepliesContainer';
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
    console.log(mainData);
    const { data } = comments;

    if (data.length === 0) {
      return null;
    }

    return data.map((reply) => {
      return (
        <Fragment key={reply.id}>
          <RepliesContainer key={reply.id}>
            <Card>
              <Comment
                replyId={reply.id}
                content={reply.content}
                createdAt={reply.createdAt}
                madeBy={reply.user.username}
                score={reply.score}
                isReply={true}
              />
            </Card>
          </RepliesContainer>
          <RenderRepliesRecursive data={reply.replies} />
        </Fragment>
      );
    });
  };

  return (
    <main className={styles.main}>
      {comments.map((comment) => {
        return (
          <Fragment key={comment.id}>
            <Card key={comment.id}>
              <Comment
                id={comment.id}
                content={comment.content}
                createdAt={comment.createdAt}
                madeBy={comment.user.username}
                score={comment.score}
              />
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
