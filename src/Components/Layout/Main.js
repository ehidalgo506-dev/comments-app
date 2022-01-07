import React, { useContext } from 'react';
import dataContext from '../../store/dataContext';
import Comment from '../Comment/Comment';
import Card from '../UI/Card';
import styles from './Main.module.scss';

const Main = (props) => {
  const { comments } = useContext(dataContext);
  console.log(comments);

  return (
    <main className={styles.main}>
      {comments.map((comment) => {
        return (
          <Card key={comment.id}>
            <Comment
              id={comment.id}
              content={comment.content}
              createdAt={comment.createdAt}
              madeBy={comment.user.username}
              score={comment.score}
            />
          </Card>
        );
      })}
    </main>
  );
};

export default Main;
