import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// Props destructuring (values from App.js - map function)
// Placing properties {}
// By default, answers are hidden -  useState(false)
// If 'showInfo' is true, show paragraph
// Toggle Functionality - button section
// Ternary Operator - if 'true', display icon
const Question = ({ title, info}) => {
    const [showinfo, setShowInfo] = useState(false);

     
    return (
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setShowInfo('showInfo')}>
            {showinfo? <AiOutlineMinus/> :<AiOutlinePlus/>}
          </button>
        </header>
        {showinfo && <p>{info}</p>}
      </article>
    );
}


export default Question;