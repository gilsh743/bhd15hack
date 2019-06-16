import React from 'react';

const TranslationInput = (props) => {
    return (
        <div>
            {props.description}
            <input type='text' name='translation-input' onChange={props.onchange}></input>
        </div>

    );
}

export default TranslationInput;