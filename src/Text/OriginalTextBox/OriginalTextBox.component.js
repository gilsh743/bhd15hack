import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TextArea from 'react-textarea-autosize'

export default class OriginalTextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }   

    render() {
        return (
            <div>
                {/* <input className="textBox" placeholder={this.props.placeholder} disabled={this.state.isDisabled}/> */}
                <TextArea onKeyDownCapture={e => console.log("event", e)} autoFocus className="textBox" placeholder={this.props.placeholder} disabled={this.state.isDisabled}/>>
                <button onClick={() => this.setState({isDisabled: true})}>Translate</button>
                <button onClick={() => this.props.onSelected(window.getSelection().toString())}>Selection</button>

            </div>
        );
    }
}