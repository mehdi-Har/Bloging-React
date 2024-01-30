import React , {useState , useEffect,useRef} from "react"



function Button(){
    const inputRef = useRef(null);
    useEffect(()=>{console.log("rundered")})
    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }
    return(<>
    <button onClick={handleClick}>Click me</button>
    <input ref = {inputRef} />
    </>);
    
            
}
export default Button