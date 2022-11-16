import classes from "./containers.module.css";
import React, {useCallback, useRef, useState} from "react";

const Landing = () => {
    const [fileUpload, setFileUpload] = useState()

    const handleFileUpload = async (event) => {
        event.preventDefault();

        const fileField = document.getElementById('file-upload-input')
        const file = fileField.files[0]
        setFileUpload(file)
        const formData = new FormData();
        formData.append('file_1', file)
        // fetch('http://localhost:5000/upload', { method: 'POST', body: formData })
        // const res = await postData('http://127.0.0.1:5000/upload', formData)


    }

    const sendFileUpload = async () => {
        // const files = fui.current.files[0]
        // console.log('fileupload state: ', fileUpload)
        // console.log('fui ref, sfu: ', files)
        // const formData = new FormData();
        // formData.append('file_1', files)
        // fetch('http://localhost:5000/upload', { method: 'POST', body: formData })
        // const res = await postData('http://127.0.0.1:5000/upload2', formData)
    }

    return(

            <div className={classes.content__container}>
                <h5>aghoewirn</h5>
                <form id={'upload-form'} onSubmit={handleFileUpload}>
                    <input id={'file-upload-input'} type={'file'} />
                    <button>upload</button>
                </form>


            </div>

    )
}

export default Landing;