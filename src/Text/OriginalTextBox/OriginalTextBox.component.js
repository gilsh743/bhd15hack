import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TextArea from 'react-textarea-autosize'

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
            <div>
                <TextArea placeholder={this.props.placeholder}
                          onKeyDownCapture={this.onEnter} autoFocus 
                          className="textBox" 
                          disabled={this.state.isDisabled}
                />
                <button onClick={() => this.props.onSelected()}>Selection</button>

            </div>
        );
    }
}