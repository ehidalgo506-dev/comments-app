import React, { Fragment, useContext, useState } from 'react';
import dataContext from '../../store/dataContext';
import Comment from '../Comment/Comment';
import InputComment from '../Comment/InputComment';
import RepliesContainer from '../Comment/RepliesContainer';
import Card from '../UI/Card';
import styles from './Main.module.scss';

const Main = (props) => {
  const { comments } = useContext(dataContext);

  const [newUpdate, setNewUpdate] = useState(comments);

  const onNewUpdateHandler = (status) => {
    setNewUpdate(status);
  };

  return (
    <main className={styles.main}>
      {newUpdate.map((comment) => {
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
        <InputComment onNewUpdate={onNewUpdateHandler} />
      </Card>
    </main>
  );
};

export default Main;
