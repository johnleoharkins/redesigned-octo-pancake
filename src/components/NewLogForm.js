import React, {useCallback} from "react";
import classes from "./NewLogForm.module.css"
import {useDispatch, useSelector} from "react-redux";
import {newLogActions} from "../store/new-log-slice";


async function postData(url, data){
    const fetchInit = {
        method: "POST",
        body: data,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
        },
        mode: "cors",
        cache: 'no-cache',
        referrerPolicy: 'no-referrer',
    }

    const response = await fetch(url, fetchInit )
    const resJson = await response.json()
    return {status: response.status, payload: resJson}

}

const NewLogForm = (props) => {
    const dispatch = useDispatch();
    const {title, body} = useSelector(state => state.newLog)
    const {user_id} = useSelector(state => state.auth)

    const handleOnFocus = () => {}
    const handleOnTitleChange = (event) => {
        let title = event.target.value
        dispatch(newLogActions.updateTitle(title))
    }
    const handleOnBodyChange = (event) => {
        let body = event.target.value
        dispatch(newLogActions.updateBody(body))
    }

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();
        let newPost = { title, body, author_id: user_id}
        const data = JSON.stringify(newPost)
        const response = await postData("http://127.0.0.1:5000/new-post", data)
        if(response.status === 201){
            props.closeOverlay()
        }else{
            dispatch(newLogActions.postLogError({errorMessage: response.payload.message}))
            console.log("error posting log", response)
        }
    }, [title, body, user_id, props, dispatch])

    return (
        <div className={`${classes.auth} ${classes.modal}`}>
            <button className={classes.closeOverlay__button} onClick={props.closeOverlay}><span>x</span></button>
            <form onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor={"logTitle"}>Log Title</label>
                    <input id={"logTitle"} type={"text"} onFocus={handleOnFocus} placeholder={"New Log Title!"} onChange={handleOnTitleChange} value={title} />
                </div>

                <div className={classes.control}>
                    <label htmlFor={"logBody"}>Log Content</label>
                    <textarea id={"logBody"} maxLength={250} rows={10} cols={30} placeholder={"write something!"} onChange={handleOnBodyChange} value={body}  />
                </div>

                <button className={classes.submit__button} type={"submit"}>submit</button>
            </form>

        </div>
    )
}

export default NewLogForm;