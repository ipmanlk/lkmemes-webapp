import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
  return (
    <center>
        <div className={props.theme.spinner}>
        </div>
    </center>
  );
}

export default Spinner;