
import React, {useEffect} from "react";
import classes from "./Button.module.css";


const Button = (props) =>{
    // console.log("[BUTTON] props.val", props.val)
    // useEffect({
    //
    // },[])

    return(
        <React.Fragment>
            { (props.val !== undefined) ?
                <button className={props.classes} onClick={(e) => props.onClick(e,props.val)}>{props.children}</button> :
                <button className={props.classes} onClick={props.onClick }><span className={classes.menuFont}>{props.children}</span></button> }
        </React.Fragment>
    );
}

export default Button;