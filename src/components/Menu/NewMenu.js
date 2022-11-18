import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import RestaurantSlice, {RestaurantActions} from "../../store/restaurant-slice";
import {useLoaderData, useNavigate} from "react-router-dom";
import NewMenuItem from "./NewMenuItem";
import classes from './NewMenu.module.css'
const NewMenu = () => {
    const navigate = useNavigate()
    const loaderData = useLoaderData()
    const dispatch = useDispatch()
    const {menuItems, category} = useSelector(state => state.restaurant)

    // const getMenuItems=async () => {
    //     const fetchInit = {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         mode: "cors",
    //         cache: 'no-cache',
    //         referrerPolicy: 'no-referrer',
    //     }
    //     const res = await fetch(`http://localhost:5000/restaurant/menu`, fetchInit)
    //     const json = await res.json()
    //     console.log('/restaurant-menu (parent) loader method',json)
    //     dispatch(RestaurantActions.updateMenuItems(json))
    //     // dispatch(RestaurantActions.updateMenuItems())
    //     return json
    // }

    useEffect(() => {
        dispatch(RestaurantActions.updateMenuItems(loaderData))


        // getMenuItems()
        // dispatch(RestaurantActions.updateMenuItems(loaderData))
    },[])

    const getMenuItems = () => {
        console.log(menuItems)
        let menuItemsList = <div>Loading</div>
        if(menuItems.length > 0){
            menuItemsList = menuItems.filter((item) => item.category === category ).map((item) => {
                return(
                    <div key={item.id} className={classes.MenuItem__container}>
                        <NewMenuItem id={item.id} category={item.category} name={item.name} price={item.price} description={item.description} imageURL={item.imageURL} />
                    </div>
                )
            })
        }else{
            <div><span>Menu Items not available.</span></div>
        }
        return menuItemsList
    }

    return(
        <React.Fragment>
            <div>
                <button onClick={() => dispatch(RestaurantActions.updateMenuCategory('entree'))}>entrees</button>
                <button onClick={() => dispatch(RestaurantActions.updateMenuCategory('appetizer'))}>appetizers</button>
                <button onClick={() => dispatch(RestaurantActions.updateMenuCategory('beverage'))}>beverages</button>
            </div>
            <div className={classes.menuItemsList}>
                <h3 style={{'textAlign': 'center'}}>{category}</h3>
                {getMenuItems()}
            </div>

        </React.Fragment>
    )
}

export default React.memo(NewMenu);