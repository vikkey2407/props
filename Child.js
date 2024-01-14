import React from "react";
function Actor(props){
    return(
        <div>
            <h1>
            VIJAY{props.title+""+props.wish}</h1>
            {console.log(props.children)} // here displays children details in console
            {props.children} // here print children in web page
        </div>
    )

}

export {Actor}