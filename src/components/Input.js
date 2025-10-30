
import React from 'react'


const Input = ({text,setText}) => {
  return (
    <div className='textarea' style={{display:"flex",alignItems:"center"}}>
        <textarea onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default Input