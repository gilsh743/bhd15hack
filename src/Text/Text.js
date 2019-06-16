
import React from 'react';
import TranslationInput from './translation-input';
import OriginalTextBox from './OriginalTextBox/OriginalTextBox.component';
import './Text.css';
import JustButton from './buttun.component'

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = { transText: "", orgText: "", transSentences: [], sentencesCounter: 0 };

        this.onTransTextChange = this.onTransTextChange.bind(this);
        this.onSelected = this.onSelected.bind(this);
        this.onFinishSentenceClick = this.onFinishSentenceClick.bind(this);
        this.finishDocument = this.finishDocument.bind(this);
    };

    onTransTextChange(event) {
        this.setState({ transText: event.target.value });
    };

    onSelected() {
        this.setState({ orgText: window.getSelection().toString() })
    }

    onFinishSentenceClick() {
        var transText = this.state.transText;
        var origText = this.state.origText;
        var transSentences = this.state.transSentences.concat({ "orig": origText, "trans": transText });
        var counter = this.state.sentencesCounter + 1;
        
        if (counter >= 20) {
            counter = 0;
            this.sendTransSentences()
        }
        else {
            counter++;
        }
        this.setState({ transText: "", transSentences: transSentences, sentencesCounter: counter });
        
    }

    finishDocument(){
        this.sendTransSentences()
    }

    sendTransSentences(){
        let fetchOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.transSentences)
        };
        fetch('', fetchOptions)
            .then(response => response.json())
            .then(response => console.log(response));
    }

    render() {
        return (
            <div>
                <OriginalTextBox onSelected={this.onSelected} />
                {this.state.orgText}

                <TranslationInput 
                    description={"write your translation here: "}
                    onchange={this.onTransTextChange}
                    onEnter={this.onFinishSentenceClick}
                    value={this.state.transText} />

                <JustButton description="Finish Document" onClick={this.finishDocument}/>

            </div>
        )
    }
}

export default Text;
