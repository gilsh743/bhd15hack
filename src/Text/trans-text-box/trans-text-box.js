
import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import './trans-text-box.css';

class TransTextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

    appendNewTrans(newTrans) {
        var currentData = this.state.data;
        this.setState({data: currentData + newTrans + "\r\n"})
    }

    componentDidUpdate(prevProps) {
        if (this.props.trans !== prevProps.trans) {
            this.appendNewTrans(this.props.trans);
        }
    }

    render() {
        return (
            <div className={"transBoxWrapper"}>
                <CKEditor
                    onInit={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                    } }
                    onChange={ ( event, editor ) => console.log( { event, editor } ) }
                    editor={ DecoupledEditor }
                    data={this.state.data}
                    // config={ /* the editor configuration */ }
                />
            </div>
        )
    }
}

export default TransTextBox;
