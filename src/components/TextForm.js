import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpperClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to uppercase","success")
    }
    const handleLowerClick = ()=>{  
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to lowercase","success")
    }
    const handleClearClick = ()=>{
        let newText="";
        setText(newText)
    }
    const handleOnChange = (event)=>{     
        setText(event.target.value)
    }


    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const [text,setText]=useState(" ");
  return (
    <div>
        <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} rows="8" placeholder='enter text here'></textarea>
            <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To Lower case</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Convert To Clear case</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
        </div>
        </div>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Text Summary </h2>
           <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} word and {text.length} characters</p> 
           <p>{0.008 * text.split(" ").length} minutes read</p>
           <h2>Preview </h2>
           <p>{text}</p>
        </div>
    </div>
  )
}
