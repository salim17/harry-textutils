import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("Uppercase was clicked!" + text);
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    console.log("Uppercase was clicked!" + text);
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleOnChange = (event) => {
    console.log("OnChange!");
    setText(event.target.value);
  };

  const handleClearClick = (event) => {
    console.log("OnClear!");
    setText("");
    props.showAlert("Text cleared!", "danger");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#072b58" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="9"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#072b58" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element) => {return element.length !== 0}).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
