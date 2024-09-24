import { useState } from "react";

export const Calculator = ()=> {

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    
    const handleClear = ()=>{
        setResult("");
        setInput("");

    };

    const handleInput = (value)=> {
        setInput((prev) => prev + value);
    };



    const handleResult = ()=>{
        try{
            var s = eval(input);
            setInput(s);               
            }
        catch(error){
            setInput("Error");
        }       
    };

    return {input, result, handleInput, handleClear, handleResult};
}