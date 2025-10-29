import React, { useEffect, useState } from 'react'
import  marked from 'marked';

const Preview = ({text}) => {
    const [markdown,setMarkdown] = useState("");

    useEffect(() => {
        const html =  marked(text || "")
        setMarkdown(html)
    },[text])
  return (
    <div
      className='preview'
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
  )
}

export default Preview