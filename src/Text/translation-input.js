import React from 'react';
import TextArea from 'react-textarea-autosize';
import { Input } from '@material-ui/core';
import './translation-input.css';

const TranslationInput = (props) => {

    const onEnter = e =>  {
        if(e.keyCode === 13){
          props.onEnter();
        }
    };

    return (
        <div>
            {props.description}
            <Input onKeyDown={onEnter}
            type="text"
            name="translation-input"
            onChange={props.onChange}
            value={props.value} />
        </div>
    );
}

export default TranslationInput;