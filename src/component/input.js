import React, {useState } from "react";
import {notes} from "../notes";
import {Note} from "./Note"

function Input(props) {
    
const [handelinput, sethandelinput] = useState({title:"", content:""});
 const [handelnote, sethandelnote] = useState(notes);

    function input(event){
const {name, value} = event.target;
//console.log(name); console.log(value);
sethandelinput(prevalue => {
//    console.log(prevalue.title);
//    console.log(prevalue.content);
//    //console.log(prevalue);
// if (name === "topic"){
//     console.log(prevalue);
//     return{
//         title: value,
//         content: prevalue.content
// }
// } else if (name === "content"){
//     //console.log(prevalue.title);
//     return{
//         title: prevalue.title,
//         content: value
//     }
// }
return{
    ...prevalue,
    [name]: value 
}

})
    };

    function submit(event) {
         sethandelnote((prevalue)=>{
            return[
                ...prevalue, handelinput
            ]
         }
        );

       event.preventDefault();
       sethandelinput("");
    };
     console.log(handelnote);
      

return(
<div >
    <form className="note">
    <input onChange={input} name="title"  type="text" placeholder="enter the title" />
    <input onChange={input} name="content" type="text" placeholder="enter the content"/>
    <button onClick={submit} >+</button>
</form>
<div>
      { handelnote.map((result) => {
        return ( 
        <Note 
        title = {result.title} 
        content = {result.content} /> )
       })}  
</div>

</div>
)
}

export default Input;