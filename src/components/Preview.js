import React from 'react'
import ReactMarkdown from 'react-markdown'

const Preview = ({text}) => {
  return (
    <div className='preview'>
        <ReactMarkdown> {input} </ReactMarkdown>
    </div>
  )
}

export default Preview