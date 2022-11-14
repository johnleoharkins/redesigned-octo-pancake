import React from "react";
import ReactDOM from 'react-dom'
import classes from "./Overlay.module.css"
import Login from "./Login";
import Navigation from "./Navigation";
import NewLogForm from "./NewLogForm";


const Backdrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.closeModal} />
    )
}

export const LoginModal = (props) => {
    return(
        <div>
            {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal} isSideNav={false} />, document.getElementById("backdrop"))}
            {ReactDOM.createPortal(<Login closeModal={props.closeModal} />, document.getElementById("modal-overlay"))}
        </div>
    )
}

export const SideNavOverlay = (props) => {
    return(
        <div>
            {ReactDOM.createPortal(<Backdrop closeModal={props.closeOverlay} isSideNav={true} />, document.getElementById("backdrop"))}
            {ReactDOM.createPortal(<Navigation closeOverlay={props.closeOverlay} authdControls={props.authdControls} />, document.getElementById("sideNav-overlay"))}
        </div>
    )
}

export const NewLogOverlay = (props) => {
    return(
        <div>
            {ReactDOM.createPortal(<Backdrop closeModal={props.closeOverlay} />, document.getElementById("backdrop"))}
            {ReactDOM.createPortal(<NewLogForm closeOverlay={props.closeOverlay} />, document.getElementById("modal-overlay"))}
        </div>
    )
}


const Overlay = (props) => {


    return ReactDOM.createPortal(
                    <div className={classes.overlay}>
                        <button>x</button>
                        <div className={classes.modal}>
                            {props.children}
                        </div>
                    </div>, document.getElementById("container")
                )
}

export default Overlay;