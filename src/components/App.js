import React, { useState } from 'react'
import Input from './Input'
import Preview from './Preview'

const App = () => {
    const [text,setText] = useState("")
  return (
    <div className='app' style={{display:"flex",justifyContent:"space-evenly"}}>
        <Input text={text} setText={setText}/>
        <Preview text={text}/>
    </div>
  )
}

export default App