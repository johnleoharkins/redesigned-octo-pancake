import classes from './Navigation.module.css'
// import {useEffect, useRef} from "react";
// import NavBarElement from "./NavBar-Element";
import React from "react";
import {useNavigate} from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();



    return(
            <div className={classes.navBarContainer}>

                <div className={classes.navDropdown}>
                    <div className={classes.navDropdownTitle}>the restaurant</div>
                    <hr />
                    <div className={classes.navDropdownContent}>
                        <span className={`${classes.navDropdownLink} ${classes.button__typography}`} onClick={() => navigate("/restaurant-menu")}>menu</span>
                        <span className={`${classes.navDropdownLink} ${classes.button__typography}`} onClick={() => navigate("/restaurant-menu-two")}>BagShot Spread</span>
                        <span  className={`${classes.navDropdownLink} ${classes.button__typography}`}>about<br />reservations<br />topo map live</span>
                    </div>
                </div>

                <div className={classes.navDropdown}>
                    <div className={classes.navDropdownTitle}>the logs</div>
                    <hr />
                    <div className={classes.navDropdownContent}>
                        <span className={`${classes.navDropdownLink} ${classes.button__typography}`} onClick={() => navigate('/writings')} >writings</span>
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