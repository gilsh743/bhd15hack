
import React from 'react';
import TranslationInput from './translation-input';


class Text extends React.Component {
    constructor(props){
        super(props);
        this.state = {transText: " " };

        this.onTransTextChange = this.onTransTextChange.bind(this);
    };

    onTransTextChange(event){
        this.setState({transText: event.target.value});
    };

    render() {
        return (
        <div>
            <TranslationInput description={"write your translation here: "} onchange={this.onTransTextChange} />
            {this.state.transText}
        </div>
        )
    }
  }


export default Text;
