import React from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownEditor = ({text}) => {
  return (
    <div className='preview'>
        <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  )
}

export default MarkdownEditor