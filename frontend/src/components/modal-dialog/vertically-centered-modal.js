import React from 'react';

import closeIcon from '../../images/close.png';

import './styles.css';
// format can be - normal, small, wide
const VerticallyCenteredModal = ({ header, children, onClose = () => { }, format="normal"}) => {
  return (
    <div className={"modal vertically-centered "+format}>
      <div className="modal-title">{header}<img className="close-button" src={closeIcon} alt="close" onClick={onClose}></img></div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default VerticallyCenteredModal;