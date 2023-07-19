import React, { useEffect } from 'react'
import "./Videos.css"
import bfctv from "./bfctv-logo.png"
// import getApiData from '../../GetApiFunc';

const Videos = () => {
    // const [videosData, setVideosData] = useState([]);

    useEffect(() => {
        // getApiData("https://f9fd-2405-201-5c01-40e9-3d88-2fa8-e401-de9d.ngrok-free.app/api/v1/video")
        // .then(data=>setVideosData(data))
    }, []);

    return (
        <div className='videos'>
            <img src={bfctv} alt="bfctv" />

            <div className="videosContainer">

                <iframe className='uTubeVideo' title='youtube video' src="https://youtube.com/embed/7wKwhLdBrOE?mute=1" >
                </iframe>
                <iframe className='uTubeVideo' title='youtube video' src="https://youtube.com/embed/7wKwhLdBrOE?mute=1" >
                </iframe>
                <iframe className='uTubeVideo' title='youtube video' src="https://youtube.com/embed/7wKwhLdBrOE?mute=1" >
                </iframe>
                <iframe className='uTubeVideo' title='youtube video' src="https://youtube.com/embed/7wKwhLdBrOE?mute=1" >
                </iframe>

            </div>
        </div>
    )
}

export default Videos
