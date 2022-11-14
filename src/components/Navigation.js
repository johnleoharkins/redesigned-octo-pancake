import classes from './Navigation.module.css'
// import {useEffect, useRef} from "react";
// import NavBarElement from "./NavBar-Element";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AuthActions} from "../store/auth-slice";
import Login from "./Login";

const Navigation = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth)

    const handleNavigationLinkClick = (path) => {
        if(authState.showSideNav){
            dispatch(AuthActions.toggleSideNav())
        }
        navigate(path);
    }

    return(
            <div className={classes.navBarContainer}>
                { (authState.isAuthd && authState.showSideNav) && (
                    <div className={`${classes.navDropdown} ` }>
                        <div className={classes.navDropdownTitle}><span className={classes.authdUserGreeting}>Hello, {authState.username}</span></div>
                        <hr />
                        <div className={classes.authdUserControls}>
                            {props.authdControls}
                        </div>
                    </div>
                )

                }


                <div className={classes.navDropdown}>
                    <div className={classes.navDropdownTitle}>the restaurant</div>
                    <hr />
                    <div className={classes.navDropdownContent}>
                        <span className={`${classes.navDropdownLink} ${classes.button__typography}`} onClick={() => handleNavigationLinkClick("/restaurant-menu") }>menu</span>
                        <span className={`${classes.navDropdownLink} ${classes.button__typography}`} onClick={() => handleNavigationLinkClick("/restaurant-menu-two")}>BagShot Spread</span>
                        <span  className={`${classes.navDropdownLink} ${classes.button__typography}`}>about<br />reservations<br />topo map live</span>
                    </div>
                </div>

                <div className={classes.navDropdown}>
                    <div className={classes.navDropdownTitle}>the logs</div>
                    <hr />
                    <div className={classes.navDropdownContent}>
                        <span className={`${classes.navDropdownLink} ${classes.button__typography}`} onClick={() => handleNavigationLinkClick('/writings')} >writings</span>
                        <span  className={`${classes.navDropdownLink} ${classes.button__typography}`}>pictures</span>
                        <span  className={`${classes.navDropdownLink} ${classes.button__typography}`}>resources</span>
                    </div>
                </div>

                <div className={classes.navDropdown}>
                    <div className={classes.navDropdownTitle}>the datas</div>
                    <hr />
                    <div className={classes.navDropdownContent}>
                        <span className={`${classes.navDropdownLink} ${classes.button__typography}`}>idk</span>
                        <span  className={`${classes.navDropdownLink} ${classes.button__typography}`}>tbd</span>
                    </div>
                </div>

            </div>
    )
}

export default Navigation;