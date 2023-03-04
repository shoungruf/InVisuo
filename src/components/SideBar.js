import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const SideBar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return null; // early return 

  return  (
   <div className='p-5 shadow-lg w-48 '>
   <Link to="/" >Home
   </Link>
   <h1 >Live</h1>
   <h1 >Shorts</h1>   
   <h1 >Videos</h1>   
  
    <h1 className='font-bold py-2'> Subscriptions</h1>
    <ul>
        <li> Music </li>
        <li> Sports </li>
        <li> Gaming </li>
        <li> Movies </li>

    </ul>
 <h1 className='font-bold py-2'> Watch Later</h1>
    <ul>
        <li> Music </li>
        <li> Sports </li>
        <li> Gaming </li>
        <li> Movies </li>

    </ul>
   </div>


  )
}

export default SideBar