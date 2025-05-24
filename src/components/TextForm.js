import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =() =>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLowClick =() =>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }

    const handleRevClick =() =>{
        let newText=text.split(" ");
        let n="";
        for(let i=newText.length-1;i>0;i--){
            n+=newText[i]+" ";
        }
        n+=newText[0];
        setText(n);
        props.showAlert("Converted to Reverse","success");
    }

    const handleOnChange =(event) =>{
        console.log("On change was clicked");
        setText(event.target.value)
    }
const [text, setText]=useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#333333':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleRevClick}>Convert to Reverse</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text to preview here"}</p>
        </div>
        </>
    )
}
