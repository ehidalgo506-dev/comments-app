import React from 'react';
import Card from '../UI/Card';
import Comment from './Comment';
import ReplyButton from '../UI/ReplyButton';
import styles from './RepliesContainer.module.scss';

const RepliesContainer = (props) => {
  const { data } = props;

  const replyOnClickHandler = function () {
    console.log(`test`);
  };

  return (
    <div className={styles.replies}>
      {data.map((reply, index) => {
        return (
          <Card key={index}>
            <Comment
              content={reply.content}
              createdAt={reply.createdAt}
              madeBy={reply.user.username}
              score={reply.score}
            />

            <ReplyButton onClick={replyOnClickHandler} />
          </Card>
        );
      })}
    </div>
  );
};

export default RepliesContainer;
