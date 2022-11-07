import React from "react";
import classes from "./Menu.module.css"

const MenuItem = (props) => {
    return(
        <div className={classes.menuItemContainer}>
            <p className={classes.itemName}>{props.itemName}</p>
            <p className={classes.itemDesc}>{props.itemDescription}</p>
            <span className={classes.itemPrice}>{props.itemPrice}</span>
            <div className={classes.imageCard}>
                <img className={classes.itemImage} src={props.imageURL} alt={`menu item ${props.itemName}`} />
            </div>

        </div>
    );
}

export default MenuItem;