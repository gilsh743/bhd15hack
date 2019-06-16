import React from 'react';

function Button(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.description}
      </button>
    );
  }

  export default Button;