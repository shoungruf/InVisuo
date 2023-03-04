import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const ToggleMenuHandler = () => {
    dispatch(toggleMenu());
    //nothing passed in togglemenu as there is no payload, just needs state information.
  };


  useEffect(() => {
   
// implemented debouncing 
   let timer = setTimeout(() => {

    // adding logic for cache
    if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
    }else {
        getSearchSuggestions();
    }
    }, 200);

    return ()=>{
        clearTimeout(timer);  
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if(searchQuery){
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonObj = await data.json();
    setSuggestions(jsonObj[1]);
    setShowSuggestion(true);

    // update the cache by dispatching the cacheResults  wth key and value
        dispatch(cacheResults({
          // passed as array key and array value
            [searchQuery] : jsonObj[1]
        }))
        
    }
  };

  const handleSearchSuggestionClick = (value) =>{
     
  }

  return (
    <>
      <div className="grid grid-flow-col p-2 m-2 shadow-md">
        <div className="flex col-span-1">
          <img
            className="h-8 w-4 mx-1 cursor-pointer"
            src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg"
            alt="menu"
            onClick={() => ToggleMenuHandler()}
          />
          <a href="/" className="flex">
            <img
              className="h-8 mx-1"
              src="https://www.creativefabrica.com/wp-content/uploads/2021/07/05/Video-player-logo-music-logo-Graphics-14301451-1-1-580x435.jpg"
              alt="logo"
            />
            <h1 className="from-neutral-900 h-12 text-2xl">Invisuo</h1>
          </a>
        </div>
        <div className="col-span-10 px-12">
        <div >
          <input
            className="rounded-l-full border border-grey-400 h-8 w-1/2 text-justify p-2"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
            onScroll={()=>setShowSuggestion(false)}
            onClick={()=>setShowSuggestion(true)}
          />
          <button className="rounded-r-full h-8 border border-grey-400 px-2">
            🔍
          </button>

        </div>
        {showSuggestion && 
        <div className="absolute bg-white  px-5 py-2 w-[36rem] shadow-lg rounded-lg border border-gray-200">
       
            <ul>
            {suggestions.map((suggestion, id) => (
                    <li className="py-2 px-3 shadow-sm hover:bg-gray-100"
                        key={`${suggestion} - ${id}`}
                        onClick={(e)=>handleSearchSuggestionClick(e.target.value)}>  🔍 {suggestion} </li>

             ))}
            </ul>
        </div>
       
            }
         </div>
        <div className="col-span-1">
          <img
            className="h-8"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="userIcon"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
