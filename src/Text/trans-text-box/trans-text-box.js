
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
            <div>
                <CKEditor
                    onInit={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                        editor.execute( 'alignment', { value: 'right' } );
                    } }
                    onChange={ ( event, editor ) => console.log( { event, editor } ) }
                    editor={ DecoupledEditor }
                    data={this.state.data}
                    config={ 
                        {
                            removePlugins: ['Strikethrough', 'BlockQuote', 'Link', 'ImageUpload', 'MediaEmbed', 'Heading'],
                            // plugins: ['Typing']
                            fontFamily: {
                                options: [
                                    'David',
                                    'Tahoma'
                                ]
                            },
                            alignment: {
                                options: [ 'right', 'left'],
                                default: 'right'
                            },
                            
                        }
                     }
                />
            </div>
        )
    }
}

export default TransTextBox;
