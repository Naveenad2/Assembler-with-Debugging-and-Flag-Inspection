import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Createbutton(props) {
  return (
    <div><Link to="/codeeditor/0"><Button style={{height: '69px','font-size': 'x-large','font-family': 'monospace'}} className="fixed-bottom" variant="warning">{props.value}</Button></Link></div>
  )
}

export default Createbutton