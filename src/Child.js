import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

// taking the prop onhangeColor, adding an event handler onClick to call onChangeColor fn.

function Child({ onChangeColor, color }) {
  
  //fn to handle color change;
  function handleClick(){
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  // console.log(onChangeColor)
  
  //event handler to change color on click;
  return (<div onClick={handleClick} className="child" style={{ backgroundColor: color }} />);
}

export default Child;
