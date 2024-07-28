import React, { useState } from 'react';

export default function Word(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        console.log("Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handClearClick = () => {
        console.log("Clear was clicked: " + text);
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <h1>{props.title}</h1>
            <div className={`container bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Capital</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lower</button>
                <button className="btn btn-primary" onClick={handClearClick}>Clear</button>
            </div>
            <div className={`container my-3 bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes to read</p>
                <h5>Preview</h5>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
