import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HeadSet from '@material-ui/icons/Headset';
import Textsms from '@material-ui/icons/Textsms';
import Home from '@material-ui/icons/Home';
import { Link } from "react-router-dom";




function IconTabs() {
  const [value, setValue] = React.useState(0);

}
function handleChange(event, newValue) {
    this.state({value : 1});
  }
function onClick(event) {

}
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }
    
    render() {
    return (
        <Paper>
      <Tabs 
            
        centered="true"
        indicatorColor="primary"
        textColor="primary"
      >
        <Link to="/"> <Tab icon={<Home/>}  aria-label="Home" /> </Link>
        <Link to="/sound/"> <Tab icon={<HeadSet/>} aria-label="Sound" /> </Link>
        <Link to="/text/"> <Tab icon={<Textsms/>}  aria-label="Text" /> </Link>
      </Tabs>
    </Paper>
    );
}
}
export default NavBar;

