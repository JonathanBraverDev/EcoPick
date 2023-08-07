import Webcam from "react-webcam"
import { useRef, useCallback } from "react"

const MyWebcam = ( { setImg, setIstakingPic } ) => {
    
    const webcamRef = useRef(null)

    const capture = useCallback(() => {
        const imgSrc = webcamRef.current.getScreenshot()
        setImg(imgSrc)
        setIstakingPic(false)
    }, [webcamRef])
    
    return( <div>
                <div>
                    <Webcam height={200} width={200} ref={webcamRef}/>
                </div>
                <button onClick={capture}>Take Picture</button>
            </div>)
}

export default MyWebcam