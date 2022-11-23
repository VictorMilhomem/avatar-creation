import React from "react";
import "./Button.css"

const Button = ({onnClick, text}) => {


    return (
        <button className="button" onClick={onnClick}>{text}</button>
    )

}

export default Button
