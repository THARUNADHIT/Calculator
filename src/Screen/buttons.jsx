import "./Screen.css";
import React, {useState} from "react";

//Acts as a child component for "Screen"
const Button = ({handleInput, handleClear, handleResult}) => {

//    const {input, result, handleInput, handleClear, handleResult} = Calculator();
  

    return (
        <div className="flex flex- items-center justify-center pt-10">
        
        <div className="grid grid-cols-4 gap-3 width-80">
        <button className="bg-blue-500 rounded  p-4 space-x-4 space-y-4" onClick={()=>handleInput("1")}>1</button>
        <button className="bg-blue-500 rounded  p-4" onClick={()=>handleInput("2")}>2</button>
        <button className="bg-blue-500 rounded p-4" onClick={()=>handleInput("3")}>3</button>
        <button className="bg-blue-500 rounded px-4 py-4" onClick={()=>handleInput("4")}>4</button>
        <button className="bg-blue-500 rounded px-4 py-4" onClick={()=>handleInput("5")}>5</button>
        <button className="bg-blue-500 rounded px-4 py-4"  onClick={()=>handleInput("6")}>6</button>
        <button className="bg-blue-500 rounded px-4 py-4" onClick={()=>handleInput("7")}>7</button>
        <button className="bg-blue-500 rounded px-4 py-4" onClick={()=>handleInput("8")}>8</button>
        <button className="bg-blue-500 rounded px-4 py-4" onClick={()=>handleInput("9")}>9</button>
        <button className="bg-blue-500 rounded px-4 py-4" onClick={()=>handleInput("0")}>0</button>
        <button className="bg-blue-500 rounded px-4 py-4" onClick={()=>handleInput("+")}>+</button>
        <button className="bg-blue-500 rounded px-4 py-4" onClick={()=>handleInput("-")}>-</button>
        <button className="bg-blue-500 rounded px-4 py-4" onClick={()=>handleInput("*")}>*</button>
        <button className="bg-blue-500 rounded px-4 py-4" onClick={()=>handleInput("/")}>/</button>
        <button className="bg-blue-500 rounded px-4 py-4" onClick={handleResult}>=</button>
        <button className="bg-blue-500 rounded px-4 py-4" onClick={handleClear}>C</button>

        </div>
        </div>
        

    );


};

export default Button;