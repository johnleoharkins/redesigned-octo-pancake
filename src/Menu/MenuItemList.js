import {useEffect, useState} from "react";
import MenuItem from "./MenuItem";
import classes from "./Menu.module.css";

const MenuItemList = (props) => {
    let items = props.itemList.map((item) => {
        return (
            <MenuItem key={item.item} itemName={item.item} itemDescription={item.description} itemPrice={item.price} imageURL={item.imageURL} />
        )
    })
    console.log("[itemlist] ", props.itemList)
    return(
        <div className={`${classes.menuItemsListContainer} ${classes.menuItemFont}`}>
            {items}
        </div>
    );
};

export default MenuItemList;