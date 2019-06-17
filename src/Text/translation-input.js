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
            {/* <div className={"inputText"}> */}
            {props.description}
            
            <Input 
                onKeyDownCapture={onEnter}
                type='text'
                name='translation-input'
                onChange={props.onchange}
                value={props.value}
            />
            {/* </div> */}
        </div>
    );
}

export default TranslationInput;