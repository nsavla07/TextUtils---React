import React, { useState } from 'react';

export default function TextForm(props) {

const handleUpClick= () => {
    // console.log("Uppercase was clicked "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
}
const handleLoClick= () => {
    // console.log("Uppercase was clicked "+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
}

const handleClearClick= () => {
    let newText= "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
}

const handleOnChange= (event) => {
    setText(event.target.value);
}

const handleCopy= () => {
    let text= document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied to clipboard", "success");
}


const handleExSpace= () => {
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces", "success");
}
    const [text, setText]= useState("");
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-3" onClick= {handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick= {handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-3" onClick= {handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-3" onClick= {handleCopy}> Copy</button>
                <button className="btn btn-primary mx-3" onClick= {handleExSpace}> Remove Extra Space</button>


                </div>

                <div className="container my-4" style={{color: props.mode === 'dark'?'white':'black'}}>
                    <h1>Your Text Summary</h1>
                    <p> {text.split(" ").length-1} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes Read</p>
                </div>
                <h2>Preview</h2>
                <p>{text.length>0?text: "Enter something to preview here"}</p>
        </>
    )
}