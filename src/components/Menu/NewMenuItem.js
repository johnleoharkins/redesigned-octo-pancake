import React from "react";
import classes from './NewMenuItem.module.css'
const NewMenuItem = (props) => {
    return(
        <React.Fragment>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <span><p>${props.price}</p></span>
            <div className={classes.imageCard}>
                <img className={classes.itemImage} src={`http://localhost:5000${props.imageURL}`} />
            </div>

        </React.Fragment>
    )
}

export default NewMenuItem