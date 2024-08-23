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

        sethandelinput({title:"", content:""});
       event.preventDefault();
    };
     
      

return(
<div >
    <form className="note">
    <input onChange={input}value=
    {handelinput.title} name="title"  type="text" placeholder="enter the title" />
    <textarea onChange={input} name="content" value={handelinput.content} placeholder="enter the content"/>
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