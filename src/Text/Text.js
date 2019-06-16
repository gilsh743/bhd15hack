
import React from 'react';
import TranslationInput from './translation-input';
import OriginalTextBox from './OriginalTextBox/OriginalTextBox.component';
import './Text.css';


class Text extends React.Component {
    constructor(props){
        super(props);
        this.state = {transText: " " , orgText: ""};

        this.onTransTextChange = this.onTransTextChange.bind(this);
        this.onSelected = this.onSelected.bind(this);
    };

    onTransTextChange(event){
        this.setState({transText: event.target.value});
    };

    onSelected() {
        this.setState({orgText: window.getSelection().toString()})
    }

    render() {
        return (
        <div className="Textpage">
            <TranslationInput description={"write your translation here: "} onchange={this.onTransTextChange} />
            {this.state.transText}
            <OriginalTextBox onSelected={this.onSelected} className="arabText" />
            {this.state.orgText}

            
        </div>
        )
    }
  }


export default Text;
