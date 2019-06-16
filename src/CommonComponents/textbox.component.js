import React from 'react';


function Inputs(props) {
    const speakers = props.speakers;
    const speakersNamesInputs = speakers.map((number) =>
    <div>
    <label>
      {number}: 
      <input type="text" name="name" />
    </label>
    </div>
    )

    return (
      <ul>{speakersNamesInputs}</ul>
    );
  }



export default Inputs;
