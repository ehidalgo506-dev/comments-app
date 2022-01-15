import React, { Fragment, useContext, useRef, useState } from 'react';
import generateCommentTemplate from '../../generateCommentTemplate';
import dataContext from '../../store/dataContext';
import Comment from '../Comment/Comment';
import InputComment from '../Comment/InputComment';
import RepliesContainer from '../Comment/RepliesContainer';
import Card from '../UI/Card';
import styles from './Main.module.scss';

const Main = (props) => {
  const data = useContext(dataContext);
  const { comments } = useContext(dataContext);
  const [newUpdate, setNewUpdate] = useState(false);
  const newComment = useRef();

  const onNewUpdateHandler = (status) => {
    setNewUpdate(!status);
  };

  const postNewComment = (e) => {
    e.preventDefault();

    comments.push(
      generateCommentTemplate(newComment.current.value, data.currentUser)
    );

    setNewUpdate(!newUpdate);
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
                newUpdate={onNewUpdateHandler}
              />
            </Card>
            {comment.replies.length !== 0 && (
              <RepliesContainer data={comment.replies} />
            )}
          </Fragment>
        );
      })}

      <Card>
        <InputComment
          onNewUpdate={onNewUpdateHandler}
          onSubmit={postNewComment}
          compRef={newComment}
        />
      </Card>
    </main>
  );
};

export default Main;
