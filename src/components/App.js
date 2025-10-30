import React, { useState } from 'react'
import MarkdownEditor from './MarkdownEditor'

const App = () => {
    const [text,setText] = useState("")
  return (
    <div className='app' style={{display:"flex",justifyContent:"space-evenly"}}>
      <textarea id='textarea' value={text} onChange={(e) => setText(e.target.value)} />
        <MarkdownEditor text={text}/>
    </div>
  )
}

export default App