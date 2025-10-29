
import React from 'react'
import ReactMarkdown from 'react-markdown'

const Input = ({text,setText}) => {
  return (
    <div className='textarea' style={{display:"flex",alignItems:"center"}}>
        <h1>#</h1>
        <ReactMarkdown>
        <textarea onChange={(e) => setText(e.target.value)}>
        </textarea>
        </ReactMarkdown>
    </div>
  )
}

export default Input