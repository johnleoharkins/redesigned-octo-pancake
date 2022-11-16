import classes from "./containers.module.css";
import React, {useCallback, useRef, useState} from "react";

async function postData(url, data){
    // const jsonStringData = JSON.stringify(data);


    const fetchOptions= {
        method: "POST",
        body: data,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        mode: "cors",
        cache: 'no-cache',
        referrerPolicy: 'no-referrer',
    }
    try{
        const response = await fetch(url, fetchOptions)
        console.log(response, fetchOptions)
        const resJson = await response.json()
        return {status: response.status, payload: resJson}
    }catch (e) {
        console.log("Error while logging in... ", e)
        return e.message;
    }
}
async function postData2(url, data){
    const formData = new FormData(document.getElementById('upload-form'));
    formData.append('file_1', data)
    const fetchOptions= {
        method: "POST",
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        mode: "cors",
    }
    try{
        const response = await fetch(url, fetchOptions)
        console.log(response, fetchOptions)
        return response
    }catch (e) {
        console.log("Error in postData2: ", e)
        return e.message;
    }
}

const Landing = () => {
    const [fileUpload, setFileUpload] = useState()
    const fui = useRef()

    const handleFileUpload = (event) => {
        event.preventDefault();

        const fileField = document.getElementById('file-upload-input')
        const file = fileField.files[0]


        const files = fui.current.files[0]
        console.log("ref, files", files)
        setFileUpload(files)
        sendFileUpload()

        // formData.append("file", file)

        // const res = await postData('http://127.0.0.1:5000/upload', formData)
        // const res2 = await postData2('http://127.0.0.1:5000/upload', file)
        // console.log('response... ', res)

    }

    const sendFileUpload = async () => {
        const files = fui.current.files[0]
        console.log('fileupload state: ', fileUpload)
        console.log('fui ref, sfu: ', files)
        const formData = new FormData();
        formData.append('file_1', files)
        fetch('http://localhost:5000/upload2', { method: 'POST', body: formData })
        // const res = await postData('http://127.0.0.1:5000/upload2', formData)
    }

    return(

            <div className={classes.content__container}>
                <h5>aghoewirn</h5>
                <form id={'upload-form'} onSubmit={handleFileUpload}>
                    <input id={'file-upload-input'} ref={fui} type={'file'} />
                    <button>upload</button>
                </form>


            </div>

    )
}

export default Landing;