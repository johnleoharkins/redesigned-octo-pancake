import classes from "./RestaurantMenu.module.css"
import React from "react";
import IconButton from "../components/UI/IconButton";
import {useNavigate} from "react-router-dom";
import {Outlet} from "react-router-dom";


const RestaurantMenu = () => {
    const navigate = useNavigate()

    const addMenuItemHandler = () => {
        console.log("addMenuItemHandler")
        navigate('/restaurant-menu/add-item')
        // navigate('/restaurant-menu/two')
    }

    return(
        <React.Fragment>
            <div className={classes.content__container}>
                <Outlet />
            </div>
            <div className={classes.footer__container}>
                <IconButton onClick={addMenuItemHandler} iconName={"cake_add"} />
            </div>
        </React.Fragment>

    )
}

export default RestaurantMenu;