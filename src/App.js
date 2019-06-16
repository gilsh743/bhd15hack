import NavBar from './Home/NavBar.js';
import React from 'react';
import Sound from './Sound/Sound';
import Text from './Text/Text';
import Home from './Home/Home';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <h1> מגדל בבל </h1>
      <NavBar> </NavBar>

        <Route path="/" exact component={Home} />
        <Route path="/sound/" component={Sound} />
        <Route path="/text/" component={Text} />
      </Router>
      {/* <CKEditor
          editor={ ClassicEditor }
          data="<p>Hello from CKEditor 5!</p>"
          onInit={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              console.log( { event, editor, data } );
          } }
          onBlur={ editor => {
              console.log( 'Blur.', editor );
          } }
          onFocus={ editor => {
              console.log( 'Focus.', editor );
          } }
      /> */}
    </div>
  );
}

export default App;
