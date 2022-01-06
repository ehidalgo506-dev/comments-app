import React from 'react';
import styles from './CommentInfo.module.scss';
// TODO
// Remove this static image to load the avatar from the props
import testImage from '../../images/avatars/image-amyrobson.png';
import ButtonScore from '../UI/ButtonScore';

const CommentInfo = (props) => {
  return (
    <div className={`${styles.commentInfo} ${props.className}`}>
      <div className={styles.userInfo}>
        <img src={testImage} alt='User profile' className={styles.userAvatar} />
        <p className={styles.userUsername}>AmyRobson</p>
        <p className={styles.userDate}>1 month ago</p>
      </div>

      <p className={styles.commentText}>
        Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You've nailed the design and the
        responsiveness at various breakpoints works really well.
      </p>
    </div>
  );
};

export default CommentInfo;
