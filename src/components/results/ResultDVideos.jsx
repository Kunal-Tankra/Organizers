import React, { useContext, useEffect, useState } from 'react'
import "./ResultDVideos.css"
import AllContexts from '../../context/AppContext'

const ResultDVideos = () => {
  // state
  const [videos, setVideos] = useState([]);

  // context
  const {resultData} = useContext(AllContexts)

  useEffect(() => {
    setVideos(resultData.videos?.split("-"))
  }, [resultData]);


  return (
    <div className='result_videosContainer'>
      {videos.map(video=><iframe key={video} className='uTubeVideo' title='youtube video' src={`https://youtube.com/embed/${video}?mute=1`} >
      </iframe>)}
      
    </div>
  )
}

export default ResultDVideos
