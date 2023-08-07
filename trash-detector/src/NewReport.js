import './App.css';
import { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import MyWebcam from './MyWebcam';
import { Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material'

const NewReport = () => {

    const [isTakingPic, setIsTakingPic] = useState(false)
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [img, setImg] = useState()
    const [addr, setAddr] = useState()
    const [wasteType, setWasteType] = useState()
    const [description, setDescription] = useState()
    const [img64, setImg64] = useState()

    const getBase64 = (file, callback) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {callback(reader.result)}
        reader.onerror = () => {alert("error on convert to base 64")}
    }

    const convCoordsToAddr = () =>{
        if(latitude && longitude){
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDeDHVwi9LvNkqFIzLLC9dBE9AzpBPOD-s`)
            .then(response => response.json())
            .then(data => setAddr(data.results[0].formatted_address))
        }
    }

    const getLocation = () => {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            },
            () => {
                " Not recognized"
            })
        }
        convCoordsToAddr()
        return(latitude && longitude ? ` ${addr}` : " Not recognized")
    }

    // const initPage = () => <div>
    //                     {!isTakingPic ? <div>
    //                         <div>Upload Photo</div>
    //                         <input type='file' onChange={(file) => {
    //                             setImg(URL.createObjectURL(file.target.files[0]))}}/>
    //                         <button onClick={() => setIsTakingPic(true)}>take picture</button>
    //                     </div> : <MyWebcam setImg={setImg} setIstakingPic={setIsTakingPic}/>}
    //                 </div>

    return (
        <div>
            {!isTakingPic ? <div>
                <div className='ReportHeader'>New Report</div>
                <div className='ReportDetails'>
                    <div className="Location">
                        Location:
                    </div>
                    <div style={{textAlign: "left"}}>{getLocation()} </div>
                    <div className='WasteType'>Waste Type:</div>
                    <div>
                    <ToggleButtonGroup 
                        color='secondary'
                        value={wasteType}
                        onChange={(e) => setWasteType(e.target.value)}
                        exclusive
                        aria-label="Platform"
                        >
                            <ToggleButton value="Plastic">Plastic</ToggleButton>
                            <ToggleButton value="Glass">Glass</ToggleButton>
                            <ToggleButton value="Other">Other</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className='Description'>Description:</div>
                    <div>
                        <TextField variant='standard' label="Description" fullWidth onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    
                    <div className='Upload'>Upload Image:</div>
                    <input type='file' id='file' className='UploadFile' value={img64 ? img64 : null} onChange={(file) => {
                        setImg(URL.createObjectURL(file.target.files[0]))}}/>
                    <label for="file">Choose File</label>
                    <div>
                        <button id='takePic' className='UploadFile' onClick={() => setIsTakingPic(true)}>take picture</button>
                        <label for="takePic">Take Picture</label>
                    </div>
                    {img ? <div style={{margin: "1%"}}>
                        <img height={100} width={100} src={img} alt='webcam' />
                    </div> : <></>}
                </div>
            </div> : <MyWebcam setImg={setImg} setIstakingPic={setIsTakingPic}/>}
        </div>
    )
}

export default NewReport;
