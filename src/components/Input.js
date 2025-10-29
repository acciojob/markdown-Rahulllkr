
import React from 'react'

const Input = ({text,setText}) => {
  return (
    <div className='textarea' style={{display:"flex",alignItems:"center"}}>
        <h1>#</h1>
        <textarea rows={10} onChange={(e) => setText(e.target.value)}>

        </textarea>
    </div>
  )
}

export default Input