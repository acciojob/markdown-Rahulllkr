import React from 'react'
import ReactMarkdown from 'react-markdown'

const Preview = ({text}) => {
  return (
    <div className='preview'>
        <ReactMarkdown><h1>{text}</h1></ReactMarkdown>
    </div>
  )
}

export default Preview