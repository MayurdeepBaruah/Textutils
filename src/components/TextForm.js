import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= () => {
        //console.log("Upper case was clicked")
        let newText=text.toUpperCase();
        setText(newText)
        props.alert3("Converted to Uppercase","success")
    }

    const handleLoClick= ()=>
    {
        let newText=text.toLowerCase();
        setText(newText)
        props.alert3("Converted to Lowercase","success")
    }
    const handlecapitalizeClick= ()=>
    {
        let words=text.split(' ')
        for (let i=0; i<words.length; i++)
        {
            words[i]=words[i][0].toUpperCase()+words[i].substring(1)
        }
        let words1=words.join(' ')
        setText(words1)
        props.alert3("Converted to capital case","success")

    }
    const handleCopy=()=>
    {
        // Get the text field
        var copyText = document.getElementById("mybox");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        props.alert3("Text is copied","success")
    }
    const HandleExtraSpace=()=>
    {
        
        let newtext=text.split(/[ ]+/)
        let newtext1=newtext.join(" ");
        setText(newtext1)
        props.alert3("Extra space deleted","success")
    }

    const handleclearClick=() => {
        let newtext=""
        setText(newtext)
        props.alert3("Text is cleared","success")
    }
    const handleOnChange= (event) => {
        //console.log("On change")
        setText(event.target.value)
    }

    const[text, setText]=useState("");
    
    return (
        <>
    <div className='container'style={{color: props.mode==='light'?"black":"white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.togglemode1,color: props.mode==='light'?"black":"white"}} id="mybox" rows="8"></textarea>
        </div>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handlecapitalizeClick}>Convert to capitalize</button>
    <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
    <button className="btn btn-primary mx-1" onClick={HandleExtraSpace}>Remove unncessary space</button>
    <div className="container my-3" style={{color: props.mode==='light'?"black":"white"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes</p>
        <p>{text.split(" ").length-1} spaces</p>
        <h2>Preview</h2>
        <pre>{text.length>0?text:"Enter something in the textbox above to it preview here"}</pre>
    </div> 
    </>
  )
}
