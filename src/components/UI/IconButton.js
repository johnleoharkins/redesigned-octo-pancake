import React from "react";
import classes from "./IconButton.module.css";

const IconButton = (props) => {


    return(
        <button className={classes.iconButton} onClick={props.onClick}>
            <span className="material-symbols-outlined">{props.iconName}</span>
        </button>
    )
}

export default IconButton;