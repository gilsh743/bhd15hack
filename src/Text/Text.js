
import React from 'react';
import TranslationInput from './translation-input';
<<<<<<< HEAD
import OriginalTextBox from './OriginalTextBox/OriginalTextBox.component';
import './Text.css';
=======
import Button from './buttun.component';
import OriginalTextBox from './OriginalTextBox/OriginalTextBox.component'
>>>>>>> 9a4cf5a207218d72636936ab0e2881208f754e87

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
        <div className="Textpage">
            <TranslationInput description={"write your translation here: "} onchange={this.onTransTextChange} />
            {this.state.transText}
<<<<<<< HEAD
            <OriginalTextBox onSelected={this.onSelected} className="arabText" />
            {this.state.orgText}

            
=======
            <Button description={"finish translate sentence"} onClick={this.onFinishSentenceClick}></Button>

>>>>>>> 9a4cf5a207218d72636936ab0e2881208f754e87
        </div>
        )
    }
  }


export default Text;
