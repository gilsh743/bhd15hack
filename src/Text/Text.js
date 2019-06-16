
import React from 'react';
import TranslationInput from './translation-input';
import Button from './buttun.component';
import OriginalTextBox from './OriginalTextBox/OriginalTextBox.component'

class Text extends React.Component {
    constructor(props){
        super(props);
        this.state = {transText: " " , orgText: "", transSentences: []};

        this.onTransTextChange = this.onTransTextChange.bind(this);
        this.onSelected = this.onSelected.bind(this);
        this.onFinishSentenceClick = this.onFinishSentenceClick.bind(this);
    };

    onTransTextChange(event){
        this.setState({transText: event.target.value});
    };

    onSelected() {
        this.setState({orgText: window.getSelection().toString()})
    }

    onFinishSentenceClick(){
         var transText = this.state.transText;
         var origText = this.state.origText;
         var transSentences = this.state.transSentences.concat({"orig": origText, "trans": transText});
         this.setState({transSentences: transSentences});

    }

    render() {
        return (
        <div>
            <OriginalTextBox onSelected={this.onSelected} />
            {this.state.orgText}

            <TranslationInput description={"write your translation here: "} onchange={this.onTransTextChange} />
            {this.state.transText}
            <Button description={"finish translate sentence"} onClick={this.onFinishSentenceClick}></Button>

        </div>
        )
    }
  }


export default Text;
