import React from 'react'
import { useRef } from 'react'

const NewLesson = () => {

const refConatainer = useRef("")


  return (
    <div>
        <input type="text" ref={refConatainer} className="text-slate-600"/>
        <button
        onClick={() => {
            return console.log(refConatainer.current.value)
        }}
        className='bg-black'>Submit</button>
    </div>
  )
}

export default NewLesson