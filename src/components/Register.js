import classes from './Register.module.css'
import IconButton from "./UI/IconButton";
import React, {useState} from "react";

async function postData(url, data){
    const fetchInit = {
        method: "POST",
        body: data,
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Length': data.length,
        },
        // mode: "cors",
        // cache: 'no-cache',
        // referrerPolicy: 'no-referrer',
    }

    const response = await fetch(url, fetchInit )
    const resJson = await response.json()
    return {status: response.status, payload: resJson}

}


const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameValidity, setUsernameValidity] = useState(true)
    const [passwordValidity, setPasswordValidity] = useState(true)

    const handleUsernameChange = (event) => {
        setUsername(event.currentTarget.value)
        setUsernameValidity(true)
    }
    const handlePasswordChange = (event) => {
        const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
        const curPass = event.target.value
        if (validPassword.test(curPass)){
            setPasswordValidity(true)
        }else{
            setPasswordValidity(false)
        }
        setPassword(event.currentTarget.value)
    }
    const submitRegistration = (event) => {
        event.preventDefault();
        const data = JSON.stringify({"username": username, "password": password})
        console.log(data)
        postData( "http://localhost:5000/register",data).then((res) => {
            if(res.status === 409){
                setUsernameValidity(false)
            }else if(res.status === 201){
                console.log("new user registered successfully")
            }
        })

    }
    const validUsernameInput = usernameValidity ? classes.registerControl : `${classes.registerControl} ${classes.invalid}`
    const validPasswordInput = passwordValidity ? classes.registerControl : `${classes.registerControl} ${classes.invalid}`
    console.log(password, passwordValidity)
    return(
        <div className={classes.register__container}>
            <form onSubmit={submitRegistration}>
                <h3 className={classes.title}>Register New User</h3>
                <div className={validUsernameInput}>
                    <label>Username</label>
                    <input type={"text"} onChange={handleUsernameChange} value={username} placeholder={"Choose a username"} />
                </div>
                <div className={validPasswordInput}>
                    <div className={classes.tooltip}>
                        <label>Password</label>
                        <span className={classes.tooltiptext}>Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</span>
                    </div>

                    <input type={"text"} onChange={handlePasswordChange} value={password} placeholder={"Choose a password"} />
                </div>
                <div className={classes.submitNewItemButton__container}>
                    <IconButton iconName={'send'} styles={{backgroundColor: 'rgba(255,255,255,1) '}} />
                </div>
            </form>
        </div>
    )
}

export default Register;