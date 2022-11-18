import Button from "../UI/Button";
import { useEffect, useState} from "react";
import MenuItemList from "./MenuItemList";
import {APPETIZERS, ENTREES, BEVERAGES} from "../data/MenuData";
import classes from "./Menu.module.css"
import React from "react";
import {useLoaderData} from "react-router-dom";


const Menu = () => {
    const [subMenuSelection, setSubMenuSelection] = useState("appetizers");
    const [itemList, setItemList] = useState();



    useEffect(() => {
        if(subMenuSelection === "appetizers"){
            setItemList(APPETIZERS)
        } else if(subMenuSelection === "entrees"){
            setItemList(ENTREES)
        }else if(subMenuSelection === "beverages"){
            setItemList(BEVERAGES)
        }
    }, [subMenuSelection])

    const handleSubMenuSelectionChange = (event, value) => {
        // event.preventDefault();
        setSubMenuSelection(value)
        // console.log('click', event, value)

    }

    const menuButtonClasses = (submenuName) => {
        return subMenuSelection === submenuName ? `${classes.submenu} ${classes.active}` : classes.submenu;
    }

    return(
        <React.Fragment>
            <div className={classes.menuNavContainer}>
                <Button classes={menuButtonClasses("appetizers")} onClick={handleSubMenuSelectionChange} val={"appetizers"}>Appetizers</Button>
                <Button classes={menuButtonClasses("entrees")} onClick={handleSubMenuSelectionChange} val={"entrees"}>Entrees</Button>
                <Button classes={menuButtonClasses("beverages")} onClick={handleSubMenuSelectionChange} val={"beverages"}>Beverages</Button>

            </div>
            <div className={classes.menuContent}>
                {itemList && <MenuItemList itemList={itemList}  />}
            </div>
        </React.Fragment>

    );
};

export default Menu;