import React from 'react';
import styles from './CommentInfo.module.scss';
// TODO
// Remove this static image to load the avatar from the props
import testImage from '../../images/avatars/image-amyrobson.png';

const CommentInfo = (props) => {
  //all props are undefined except date
  const {
    comment: { createdAt, content, user },
  } = props;

  return (
    <div className={`${styles.commentInfo} ${props.className}`}>
      <div className={styles.userInfo}>
        <img src={testImage} alt='User profile' className={styles.userAvatar} />
        <p className={styles.userUsername}>{user.username}</p>
        <p className={styles.userDate}>{createdAt}</p>
      </div>

      <p className={styles.commentText}>{content}</p>
    </div>
  );
};

export default CommentInfo;
