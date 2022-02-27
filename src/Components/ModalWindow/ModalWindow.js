import React from 'react';
import reactDom from 'react-dom';
import './ModalWindow.scss';
import Button from '../UI/Button';

const Backdrop = (props) => {
  return (
    <div className='backdrop' onClick={props.onClick}>
      {props.children}
    </div>
  );
};

const MessageWindow = (props) => {
  return (
    <div className='messageWindow'>
      <h2>Are you sure you want to continue?</h2>
      <p>{props.windowMessage}</p>
      <div className='btnsContainer'>
        <Button type='cancel'>No, Cancel</Button>
        <Button type='delete'>Yes, Continue</Button>
      </div>
    </div>
  );
};

const ModalWindow = (props) => {
  const backdropEl = document.querySelector('#backdrop');
  const windowEl = document.querySelector('#modalWindow');
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onClick={props.closeModal} />,
        backdropEl
      )}
      {reactDom.createPortal(
        <MessageWindow windowMessage={props.message} />,
        windowEl
      )}
    </>
  );
};

export default ModalWindow;
