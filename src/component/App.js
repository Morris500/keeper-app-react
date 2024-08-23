import React, {useState} from "react";
import ReactDOM from "react-dom";
import {notes} from '../notes'
import { Note } from "./Note";
import {Header} from "./Header";
import {Footer} from "./Footer";
import Input from "./input";

//  notes.map((result)=> {
//   result.content   
// })

function App(props) {
  const [handelnote, sethandelnote] = useState(notes);

function note(result){
sethandelnote((prevalue)=>{
  return[
    ...prevalue, result
  ]
})
}
  return(
        <div> 
    <Header />
    <Input addnote={note}/>
     {handelnote.map((result) => {
     return ( 
     <Note 
    title = {result.title} 
    content = {result.content} /> )
    })}
     
    <Footer />
    </div>
  )
};

export {App};
 