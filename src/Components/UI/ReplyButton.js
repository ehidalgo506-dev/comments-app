import React from 'react';
import styles from './ReplyButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const ReplyButton = (props) => {
  const replyIcon = <FontAwesomeIcon icon={faReply} />;
  return (
    <button className={styles.replyButton}>
      {replyIcon} <span>Reply</span>
    </button>
  );
};

export default ReplyButton;
