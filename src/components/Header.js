import Navigation from "./Navigation";
import classes from "./Header.module.css";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AuthActions} from "../store/auth-slice";
import {LoginModal} from "./Overlay";

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

                <Navigation />
            </div>

    )
}

export default Header;