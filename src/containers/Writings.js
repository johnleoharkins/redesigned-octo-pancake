import React from "react";
import {useLoaderData} from "react-router-dom";
import classes from './containers.module.css'
import {useDispatch, useSelector} from "react-redux";
import {newLogActions} from "../store/new-log-slice";
import Overlay, {NewLogOverlay} from "../components/Overlay";
import NewLogForm from "../components/NewLogForm";

const Writings = () => {
    const logs = useLoaderData()
    // console.log("posts from loaderData... ", posts)
    const {isAuthd, showSideNav} = useSelector(state => state.auth)
    const {newLogOverlayOpen} = useSelector(state => state.newLog)
    const dispatch = useDispatch();


    const logsList = logs.map((post) => {
        return (
            <div key={post.id} className={classes.log__container}>
                <h4 className={`${classes.logTitle}`}>{post.title}</h4>
                <hr/>
                <span className={classes.logAuthor}>by {post.author.username}</span>
                <p className={classes.logContent}>{post.body}</p>
            </div>
        )
    })

    const handleOpenNewLogOverlay = () => {
        dispatch(newLogActions.openLogOverlay())
    }

    const handleCloseNewLogOverlay = () => {
        dispatch(newLogActions.closeLogOverlay())
    }


    return (
        <React.Fragment>
            {isAuthd && !showSideNav && (
                // <div className={classes.newLog__button__container}>
                    <button className={classes.newLog__button} onClick={handleOpenNewLogOverlay}>New Log</button>
                // </div>
            ) }


            <div className={classes.logList__container}>
                {logsList}
            </div>

            {/*{newLogOverlayOpen && (*/}
            {/*    <Overlay closeOverlay={handleCloseNewLogOverlay}>*/}
            {/*        <NewLogForm closeOverlay={handleCloseNewLogOverlay} />*/}
            {/*    </Overlay>)}            */}

            {newLogOverlayOpen && (
                <NewLogOverlay closeOverlay={handleCloseNewLogOverlay} />)}

        </React.Fragment>
    )
}

export default Writings