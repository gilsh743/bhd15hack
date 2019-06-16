import React from 'react';
import { Form, TextArea } from 'semantic-ui-react'
import "./translation-input.css"

const TranslationInput = (props) => {
    return (
        <div >
 p            <TextArea 
                          className="hebrewBox"                    
                          multiline="true"
                          rows={25} 
                          name='translation-input'
                          onChange={props.onchange}/>
        </div>

    );
}

export default TranslationInput;