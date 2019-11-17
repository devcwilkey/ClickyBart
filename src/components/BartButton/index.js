import React from "react";
import BootStrapImage from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./style.css";

function BartButton(props) {
  return(
    <Button
      variant="link"
      className="m-0 p-0"
      onClick={() => props.bartClick(props.id)}
    >
      <BootStrapImage 
        src={props.image}
        className="bartButton"
      />
    </ Button>
  );
}


export default BartButton;