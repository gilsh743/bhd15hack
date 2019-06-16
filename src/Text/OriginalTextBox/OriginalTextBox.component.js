import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Form, TextArea } from 'semantic-ui-react'
import './OriginalText.css';

export default class OriginalTextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onEnter = this.onEnter.bind(this);
    }   

    onEnter(e) {
            if(e.keyCode === 13){
                this.setState({isDisabled: true})
            }
    }

    render() {
        return (
            <div
                className="textBox" >
                <TextArea placeholder={this.props.placeholder}
                          onKeyDownCapture={this.onEnter} autoFocus 
                          disabled={this.state.isDisabled}
                          
                          multiline="true"
                          rows={25}
                />
                <button className={"arabText"} onClick={() => this.props.onSelected()}>Selection</button>

            </div>
        );
    }
}