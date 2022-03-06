import React from 'react';
import reactDom from 'react-dom';
import './ModalWindow.scss';
import Button from '../UI/Button';
import { useEffect } from 'react/cjs/react.production.min';

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
        <Button type='cancel' onClick={props.closeModal}>
          No, Cancel
        </Button>
        <Button type='delete' onClick={props.onContinue}>
          Yes, Continue
        </Button>
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
        <MessageWindow
          windowMessage={props.message}
          closeModal={props.closeModal}
          onContinue={props.onContinue}
        />,
        windowEl
      )}
    </>
  );
};

export default ModalWindow;
