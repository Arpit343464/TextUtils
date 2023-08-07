import React, {useState} from "react";


export default function TextFrom(props) {
  const handleupClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handlelowClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleclearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Your text is clear!", "success");
  }

  const handlecopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your text is copied!", "success");
  }

  const handleextraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space is removed!", "success");
  }
  const handleonChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state


  return (
    <>
      <div className={`container text-${props.mode==="dark"?"light":"dark"}`}>
        <h3 className="my-3">{props.heading}</h3>
        <div className="form-group">
          <textarea className={`form-control border border-${props.mode}`} value={text} onChange={handleonChange} style={{color: props.mode==="dark"?"#fff":"#000"}} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.mode==="light"?"primary":props.mode} m-2`} onClick={handleupClick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode==="light"?"primary":props.mode} m-2`} onClick={handlelowClick}>Convert to Lowercase</button>
        <button className={`btn btn-${props.mode==="light"?"primary":props.mode} m-2`} onClick={handleclearClick}>Clear Text</button>
        <button className={`btn btn-${props.mode==="light"?"primary":props.mode} m-2`} onClick={handlecopyClick}>Copy Text</button>
        <button className={`btn btn-${props.mode==="light"?"primary":props.mode} m-2`} onClick={handleextraSpaceClick}>Remove Extra Space</button>
      </div>
      <div className={`container my-3 text-${props.mode==="dark"?"light":"dark"}`}>
        <h2>Your text summary</h2>
        <p>{
          text.split(" ").filter((element)=>{return element.length!==0}).length
        } Words, and {text.length} Charecters</p>
        <p>{(0.008 * text.split(" ").filter((element) => {return element.length!==0}).length).toFixed(2)} Minutes for Read.</p>
        <h2>Your text preview</h2>
        <p>{text.length>0?text:"Enter Somthing to Preview It here."}</p>
      </div>
    </>
  );
}
