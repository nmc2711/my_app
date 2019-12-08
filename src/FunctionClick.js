import React from 'react';

function FunctionClick () {
    const body =document.querySelector("body");
    function clickHandler () {
        if (body.style.backgroundColor === "red") {
            body.style.backgroundColor = "blue";
        }else {
            body.style.backgroundColor = "red";
        }   
    }
    return (
        <div>
            <button onClick={clickHandler} className="btn">click</button>
        </div>
    )
}
export default FunctionClick;