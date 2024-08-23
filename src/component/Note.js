import React from "react";
import ReactDOM from "react-dom";
import {notes} from '../notes'


function Note(props) {
  return(
    <div className="note"> 
<h1> {props.title} </h1>
<p>{props.content }</p>
<button>Delete</button>
    </div>
  )
};

export {Note};
 