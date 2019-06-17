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
        <div className={"inputTextWrapper"}>
            <TextArea placeholder={props.description} onChange={props.onChange} value={props.value} onKeyDownCapture={onEnter} />
        </div>
    );
}

export default TranslationInput;