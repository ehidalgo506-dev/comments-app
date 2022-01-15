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
    comments.push(
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
              <RepliesContainer data={comment.replies} />
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
