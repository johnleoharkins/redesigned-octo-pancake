import React from "react";
import ReactDOM from 'react-dom'
import classes from "./Overlay.module.css"
import Login from "./Login";


const Backdrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.closeModal} />
    )
}

export const LoginModal = (props) => {
    return(
        <div>
            {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal} />, document.getElementById("backdrop"))}
            {ReactDOM.createPortal(<Login closeModal={props.closeModal} />, document.getElementById("modal-overlay"))}
        </div>
    )
}


const Overlay = (props) => {


    return ReactDOM.createPortal(
                    <div className={classes.overlay}>
                        <button></button>
                        <div className={classes.modal}>
                            {props.children}
                        </div>
                    </div>, document.getElementById("container")
                )
}

export default Overlay;