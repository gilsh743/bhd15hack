import React from 'react';

const TranslationInput = (props) => {
    return (
        <div>
            {props.description}
            <input type='text' name='translation-input'></input>
        </div>
    );
}

export default TranslationInput;