
import React from 'react'

const Input = ({text,setText}) => {
  return (
    <div className='textarea' style={{display:"flex",alignItems:"center"}}>
        <h1>#</h1>
        <textarea onChange={(e) => setText(e.target.value)}>
        </textarea>
    </div>
  )
}

export default Input