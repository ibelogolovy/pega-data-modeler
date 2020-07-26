import React from 'react';
import './spinner.css';

const Spinner = ({mode=""}) => {
  return (
      <div className="lds-css ng-scope">
            <div className={"lds-dual-ring "+mode}>
              <div></div>
            </div>
        </div>
  );
};

export default Spinner;
