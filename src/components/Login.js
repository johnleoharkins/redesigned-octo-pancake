import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {AuthActions} from "../store/auth-slice";
import classes from "./Login.module.css";

async function postData(url, data){
    const jsonStringData = JSON.stringify(data);
    const fetchOptions= {
        method: "POST",
        body: jsonStringData,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': jsonStringData.length,
        },
        mode: "cors",
        cache: 'no-cache',
        referrerPolicy: 'no-referrer',
    }
    try{
        const response = await fetch(url, fetchOptions)
        console.log(response)
        const resJson = await response.json()
        return {status: response.status, payload: resJson}
    }catch (e) {
        console.log("Error while logging in... ", e)
        return e.message;
    }
}


const Login = (props) => {
    const [username, setUsername] = useState('jharkins')
    const [password, setPassword] = useState('password')

    const dispatch = useDispatch();

    const handleUsernameInputChange = (event) => {
        setUsername(event.currentTarget.value)
    }

    const handlePasswordInputChange = (event) => {
        setPassword(event.currentTarget.value)
    }

    const handleLogin = useCallback(async (event) => {
        event.preventDefault();
        const response = await postData('http://127.0.0.1:5000/login', {username, password})
        console.log("login response: ", response)
        if(response.payload.access_token && response.status === 200){
            dispatch(AuthActions.loginSuccessful( response.payload ))
            setUsername('')
            setPassword('')
            props.closeModal();

        }else{
            console.log("Invalid login credentials")
            setUsername('')
            setPassword('')
            dispatch(AuthActions.loginFailed( {statusCode: response.code, errorMessage: response.message} ))
        }


    }, [username, password, dispatch, props])

    if(props.sideNavLogin){
        return (
            <div className={`${classes.sideNavAuth}`}>
                <form onSubmit={handleLogin}>
                    <div className={classes.sideNavControl}>
                        <label htmlFor='username'>Username</label>
                        <input id={"username"} type={"text"} placeholder={"Enter username"}
                               onChange={handleUsernameInputChange} value={username} />
                    </div>
                    <div className={classes.sideNavControl}>
                        <label htmlFor='password'>Password</label>
                        <input id={"password"} type={"password"} placeholder={"Enter password"}
                               onChange={handlePasswordInputChange} value={password} />
                    </div>

                    <button type={"submit"}>login</button>
                </form>

            </div>
        )
    }else{
        return(
            <div className={`${classes.auth} ${classes.modal}`}>
                <form onSubmit={handleLogin}>
                    <div className={classes.control}>
                        <label htmlFor='username'>Username</label>
                        <input id={"username"} type={"text"} placeholder={"Enter username"}
                               onChange={handleUsernameInputChange} value={username} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input id={"password"} type={"password"} placeholder={"Enter password"}
                               onChange={handlePasswordInputChange} value={password} />
                    </div>

                    <button type={"submit"}>login</button>
                </form>

            </div>
        )
    }


}

export default Login;