import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick =()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","Success");
  }

  const handleLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","Success");
  }

  const handleClearClick =()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text is cleared","Success");
  }



  const handleOnChange =(event)=>{
    setText(event.target.value);
    
  }

  const handleDelete = ()=>{
    let newText = text.slice(0,-1)
    setText(newText)
    props.showAlert("text is deleted","Success");
  }

  const handleReverseClick = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text is reversed","Success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("Text minimized successfully","Success");
  };

  const [text, setText] = useState("");
 
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <div className="mb-3">
        <h1 className="mb-4">
          {props.heading}
        </h1>

        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDelete}>Delete</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReverseClick}>Reverse</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Extra Space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
