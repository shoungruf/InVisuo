import React, { useEffect } from 'react'
import {useSearchParams} from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import {useDispatch} from 'react-redux'
import SuggestedVideoSection from './SuggestedVideoSection'
import CommentSection from './CommentSection'

const WatchPage = () => {

    const dispatch = useDispatch();

    const [searchParams] =  useSearchParams();

    useEffect(()=>{
        dispatch(closeMenu());
    })

    /**
     * one way is to embed the video 
     * other is to call fetch call to call the getVideoById etc 
     */
  return (
    <>
    <div className='grid grid-flow-row'>
    <div className='flex'>
    <div className='px-5 py-4'>
    <iframe width="1200" height="700" src={"https://www.youtube.com/embed/" + searchParams.get("v")}
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe>
        </div>
        <div className='py-4 border shadow-md'>
            <SuggestedVideoSection />
        </div>
        </div>
        <div className='p-5 m-2 border-2 shadow-md'>
            <CommentSection /> 
        </div>
       </div>
        
        </>

  )
}

export default WatchPage