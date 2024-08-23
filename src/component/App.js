import React, {useState} from "react";
import ReactDOM from "react-dom";
import {notes} from '../notes'
import { Note } from "./Note";
import {Header} from "./Header";
import {Footer} from "./Footer";
import Input from "./input";
import { logDOM } from "@testing-library/react";

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
function deletenote (id) {
  sethandelnote(prevItems => {
    return prevItems.filter((item, index) => {
      return index !== id;
    });
  });
}
  return(
        <div> 
    <Header />
    <Input addnote={note}/>
     {handelnote.map((result, index) => {
     return ( 
     <Note 
     key={index}
     id={index}
    title = {result.title} 
    content = {result.content} 
    delete={deletenote}
    /> )
    })}
     
    <Footer />
    </div>
  )
};

export {App};
 