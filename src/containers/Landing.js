import classes from "./containers.module.css";
import React from "react";

async function postData(url, data){
    // const jsonStringData = JSON.stringify(data);
    const fetchOptions= {
        method: "POST",
        body: data,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Content-Length': data.length
        },
        mode: "cors",
        cache: 'no-cache',
        referrerPolicy: 'no-referrer',
    }
    try{
        const response = await fetch(url, fetchOptions)
        console.log(response.body)
        const resJson = await response.json()
        return {status: response.status, payload: resJson}
    }catch (e) {
        console.log("Error while logging in... ", e)
        return e.message;
    }
}

const Landing = () => {

    const handleFileUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        const fileField = document.getElementById('file-upload-input')
        const file = fileField.files[0]

        formData.append('file_1', file)
        console.log('form data... ', file)
        const res = await postData('http://127.0.0.1:5000/upload', formData)
        console.log('response... ', res)

    }
    return(

            <div className={classes.content__container}>
                <h5>aghoewirn</h5>
                <form onSubmit={handleFileUpload}>
                    <input id={'file-upload-input'} type={'file'} />
                    <button>upload</button>
                </form>


            </div>

    )
}

export default Landing;