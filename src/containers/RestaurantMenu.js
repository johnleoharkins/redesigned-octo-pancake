import classes from "./RestaurantMenu.module.css"
import React, {useCallback, useEffect, useMemo} from "react";
import IconButton from "../components/UI/IconButton";
import {useLoaderData, useNavigate} from "react-router-dom";
import {Outlet} from "react-router-dom";
import {RestaurantActions} from "../store/restaurant-slice";
import {useDispatch, useSelector} from "react-redux";




const RestaurantMenu = () => {
    const navigate = useNavigate()
    const loaderData = useLoaderData()
    const dispatch = useDispatch()
    const menuItems = useSelector(state => state.restaurant.menuItems)
    // console.log('loader data...', loaderData)
    // useEffect(() => {
    //     getMenuItems()
    //     // console.log("useEffect")
    //     // console.log("RestaurantMenu useEffect() [] = dispatch updateMenuItems: ", loaderData)
    //     // dispatch(RestaurantActions.updateMenuItems())
    // }, [])

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