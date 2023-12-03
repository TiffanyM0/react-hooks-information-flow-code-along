import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  //setting the initial state of the parent color
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");

  //update color state with new value form function imported

  function handleColorChange(newChildColor){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newChildColor);
  }


  return (
    <div className="parent" style={{ backgroundColor: color }}>
      {/* passing the callback with an event handler onChangeColor */}
      <Child color={childrenColor} onChangeColor={handleColorChange}/>
      <Child color={childrenColor} onChangeColor={handleColorChange}/>
    </div>
  );
}

export default Parent;
