import React from 'react'

function Button(props) {


  return (
    <button onClick= {props.callback} className='bg-primary text-white rounded-xl px-3 py-1 hover:opacity-75 shadow-md'>{props.label}</button>
  )
}
export default Button

