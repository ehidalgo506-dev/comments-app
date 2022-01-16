import React from 'react';
import styles from './RepliesContainer.module.scss';

const RepliesContainer = (props) => {
  return <div className={styles.replies}>{props.children}</div>;
};

export default RepliesContainer;
