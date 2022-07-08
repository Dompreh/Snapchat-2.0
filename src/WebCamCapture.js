import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { setCameraImage } from "./features/cameraSlicer";
import "./WebCamCapture.css"



const videoConstraints ={
    width:255,
    height:400,
    facingMode:"user",
}


function WebCamCapture() {
    const webcamRef=useRef(null)
    //dispatch helps us to shoot one of the actions from the setcamera functions in the cameraslicer
    const dispatch =useDispatch()
    const history =useHistory()

    // const [image, setImage]=useState('')

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc))
        history.push("/preview")
        // console.log(imageSrc)
        // setImage(imageSrc)
    }, [webcamRef, dispatch, history])

  return (
    <div className="WebCamCapture">
        <Webcam audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}/>

        <RadioButtonUncheckedIcon
        className="webcamCapture_button"
        onClick={capture}
        fontSize="large"
        />

    {/* //<img src={image}/> */}
    </div>
  )
}

export default WebCamCapture