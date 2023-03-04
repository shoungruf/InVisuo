import React from 'react'

const Button = ({name}) => {
  return (
    <div className='cursor-pointer px-5 py-3 rounded-lg m-2 bg-gray-200'>{name}</div>
  )
}

export default Button