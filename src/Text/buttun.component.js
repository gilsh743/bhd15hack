import React from 'react';
import Button from '@material-ui/core/Button';

function JustButton(props) {
    return (
      <Button className="square" onClick={props.onClick}>
        {props.description}
      </Button>
    );
  }

  export default JustButton;