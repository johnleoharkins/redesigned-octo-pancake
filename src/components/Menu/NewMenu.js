import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import RestaurantSlice, {RestaurantActions} from "../../store/restaurant-slice";
import {useLoaderData, useNavigate} from "react-router-dom";

const NewMenu = () => {
    const navigate = useNavigate()
    const loaderData = useLoaderData()
    const dispatch = useDispatch()
    const menuItems = useSelector(state => state.restaurant.menuItems)

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
    let itemsList;
    if(menuItems.length > 0){
        itemsList = menuItems.map((item) => {
            return(
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <img src={`http://localhost:5000${item.imageURL}`} />
                </div>
            )
        })
    }


    return(
        <div>
            {menuItems.length > 0 && itemsList}
        </div>
    )
}

export default React.memo(NewMenu);