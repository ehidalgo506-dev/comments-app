import React, { Fragment, useContext } from 'react';
import dataContext from '../../store/dataContext';
import Comment from '../Comment/Comment';
import InputComment from '../Comment/InputComment';
import RepliesContainer from '../Comment/RepliesContainer';
import Card from '../UI/Card';
import styles from './Main.module.scss';

const Main = (props) => {
  const { comments } = useContext(dataContext);
  console.log(`Checking`);
  console.log(comments[1].replies.length !== 0);

  return (
    <main className={styles.main}>
      {comments.map((comment) => {
        return (
          <Fragment>
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
              <RepliesContainer>
                {comment.replies.map((reply) => {
                  return (
                    <Card>
                      <Comment
                        content={reply.content}
                        createdAt={reply.createdAt}
                        madeBy={reply.user.username}
                        score={reply.score}
                      />
                    </Card>
                  );
                })}
              </RepliesContainer>
            )}
          </Fragment>
        );
      })}

      <Card>
        <InputComment />
      </Card>
    </main>
  );
};

export default Main;
