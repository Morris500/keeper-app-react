import React from "react";
import ReactDOM from "react-dom";
import {notes} from '../notes'


function Note(props) {
  function click() {
    props.delete(props.id)
  }

  return(
    <div className="note"> 
<h1> {props.title} </h1>
<p>{props.content }</p>
<button onClick={click}>Delete</button>
    </div>
  )
};

export {Note};
 