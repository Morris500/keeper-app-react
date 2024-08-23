import React, {useState } from "react";
import {notes} from "../notes";
import {Note} from "./Note"

function Input(props) {
    
const [handelinput, sethandelinput] = useState({title:"", content:""});
 
    function input(event){
const {name, value} = event.target;

sethandelinput(prevalue => {

if (name === "title"){
    
    return{
        title: value,
        content: prevalue.content
}
} else if (name === "content"){

    return{
        title: prevalue.title,
        content: value
    }
}
// return{
//     ...prevalue,
//     [name]: value 
// }

})
    };

    function submit(event) {
         props.addnote(handelinput
        //     =>{
        //     // return[ 
        //     //     ...prevalue, handelinput
        //     // ]
        //  }
        );

       event.preventDefault();
       sethandelinput("");
    };
     
      

return(
<div >
    <form className="note">
    <input onChange={input} name="title"  type="text" placeholder="enter the title" />
    <textarea onChange={input} name="content" placeholder="enter the content"/>
    <button onClick={submit} >+</button>
</form>
<div>
      {/* { handelnote.map((result) => {
        return ( 
        <Note 
        title = {result.title} 
        content = {result.content} /> )
       })}   */}
</div>

</div>
)
}

export default Input;