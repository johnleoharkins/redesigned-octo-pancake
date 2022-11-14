import Navigation from "./Navigation";
import classes from "./Header.module.css";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AuthActions} from "../store/auth-slice";
import {LoginModal, SideNavOverlay} from "./Overlay";
import {newLogActions} from "../store/new-log-slice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth )

    const handleOpenLoginModal = () => {
        dispatch(AuthActions.openLoginModal())
    }
    const handleCloseLoginModal = () => {
        dispatch(AuthActions.closeLoginModal())
    }

    const handleLogout = () => {
        dispatch(AuthActions.logout())
    }

    const authenticated = () => {
        return (
            <React.Fragment>
                <button className={`${classes.auth__button} ${classes.button__typography}`} onClick={ handleLogout }>log out</button>
                <button className={classes.account__iconButton} onClick={() => navigate(`u/${authState.username}`)}>
                    <span className={"material-symbols-outlined"}>account_circle</span>
                </button>
            </React.Fragment>
        )
    }

    const toggleSideNav = () => {
        dispatch(AuthActions.toggleSideNav())
    }

    const handleOpenNewLogOverlay = () => {
        dispatch(newLogActions.openLogOverlay())
    }


    return(
            <div className={classes.container}>
                { authState.loginModalOpen && <LoginModal closeModal={handleCloseLoginModal} />}

                <div className={classes.header}>
                    <div className={classes.brand}>
                        <h1 className={classes.business__typography}>Le'mag Silphium</h1>
                    </div>
                    <div className={classes.controls}>
                        { (localStorage.isLoggedIn && authState.isAuthd) ? authenticated() : <button className={`${classes.auth__button} ${classes.button__typography}` } onClick={handleOpenLoginModal} >Log-in</button> }
                        {/*{ authenticated() }*/}

                    </div>
                </div>

                <div className={classes.mobileSideNav}>
                    <button className={classes.account__iconButton} onClick={toggleSideNav}><span className="material-symbols-outlined">menu</span></button>
                    {/*<button className={classes.sideNavToggle__button} onClick={toggleSideNav}><span className="material-symbols-outlined">menu</span></button>*/}
                    { authState.showSideNav && <SideNavOverlay closeOverlay={toggleSideNav} authdControls={authenticated()} /> }
                    { authState.isAuthd && <button className={classes.account__iconButton} onClick={handleOpenNewLogOverlay}><span
                        className="material-symbols-outlined">note_add</span></button>}
                    {/*<button className={classes.createLog__button}><span className="material-symbols-outlined">note_add</span></button>*/}


                    <div className={classes.brand}>
                        <h1 className={classes.business__typography}>Le'mag Silphium</h1>
                    </div>

                </div>
                <div className={classes.navContainer}>
                    <Navigation />
                </div>
                {/*<Navigation />*/}
            </div>

    )
}

export default Header;