
import React from 'react'

const Input = ({text,setText}) => {
  return (
    <div className='textarea' style={{display:"flex",alignItems:"center"}}>
        <p>#</p>
        <textarea onChange={(e) => setText(e.target.value)}>

        </textarea>
    </div>
  )
}

export default Input