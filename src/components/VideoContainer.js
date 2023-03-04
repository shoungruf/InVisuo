import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCard, {AdVideoCard} from './VideoCard';
import {Link} from 'react-router-dom';

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    const getInitialVideos = async () =>{
        const data = await fetch (YOUTUBE_VIDEO_API);
        const jsonObj = await data.json();
      
        setVideos(jsonObj?.items)
    }

    useEffect(()=>{
        getInitialVideos();
    },[])
  return (
   <>
   <div className='flex flex-wrap'>
    {videos[0] &&  <AdVideoCard info={videos[0]}></AdVideoCard>}
   
        {videos && videos.map((item, id) => (
            <Link to ={"/watch?v=" + item.id } key={`${item.id}-${id}`}>
                <VideoCard key = {`${item.id}-${id}`} info={item}/>  
                </Link>
        ))}
       
   </div>
   </>
  )
}



export default VideoContainer