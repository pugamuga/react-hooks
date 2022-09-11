import React from 'react'

const Book = ({num}) => {
  return (
    <div className='h-[10vw] w-[10vw] flex flex-col items-center p-4 justify-between bg-emerald-400 rounded-lg'>
        <h1>Buy {num} {num==1?"book":"books"}</h1>
        <h1 className='text-4xl drop-shadow-lg'>📚</h1>
        <button className=' bg-sky-800 active:opacity-50 shadow-md py-1 w-full rounded-full'>Buy</button>
    </div>
  )
}

export default Book