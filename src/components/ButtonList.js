import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list =["All" , "Cricket", "Soccer", "ASMR", "Music"];
  return (
    <>
   <div className='flex '>
    {list.map((item, id) => (
        <Button key ={`${item} - ${id}`} name={item}/>
    ))}
    

    </div>
    </>
  )
}

export default ButtonList