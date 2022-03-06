import React from 'react';
import styles from './ActionButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ActionButton = (props) => {
  const replyIcon = <FontAwesomeIcon icon={faReply} />;
  const trashIcon = <FontAwesomeIcon icon={faTrash} />;
  const type = props.type.replace(props.type[0], props.type[0].toUpperCase());
  return (
    <button
      className={`${styles.actionButton} ${styles[props.type]}`}
      onClick={props.onClick}
    >
      {props.type === 'reply' ? replyIcon : trashIcon}
      <span>{type}</span>
    </button>
  );
};

export default ActionButton;
