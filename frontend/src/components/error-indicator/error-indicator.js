import React from 'react';

import {fallenMan} from '../../constants/controlIcons';


const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
        <img src={fallenMan} alt="error"></img>
        <h3>Oops!</h3> Something bad happens!
    </div>
  );
}

export default ErrorIndicator;
