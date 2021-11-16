import React from 'react';

import closeIcon from '../../images/close.png';

import './styles.css';

const VerticallyCenteredModal = ({ header, children, onClose = () => { } }) => {
  return (
    <div className="modal vertically-centered">
      <div className="modal-title">{header}<img className="close-button" src={closeIcon} alt="close" onClick={onClose}></img></div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default VerticallyCenteredModal;