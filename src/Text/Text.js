
import React from 'react';
import TranslationInput from './translation-input';
import OriginalTextBox from './OriginalTextBox/OriginalTextBox.component'


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
        <div>
            <OriginalTextBox onSelected={this.onSelected} />
            {this.state.orgText}

            <TranslationInput description={"write your translation here: "} onchange={this.onTransTextChange} />
            {this.state.transText}
        </div>
        )
    }
  }


export default Text;
