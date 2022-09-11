import React,{useContext} from 'react'
import Context from './Context'

const Book = ({num}) => {

const value = useContext(Context)

  return (
    <div className='h-[10vw] w-[10vw] flex flex-col items-center p-4 justify-between bg-emerald-400 rounded-lg'>
        <h1>Buy {num} {num==1?"book":"books"}</h1>
        <h1 className='text-4xl drop-shadow-lg'>📚</h1>
        <button
        onClick={() => {
            value.buyBook(num)
        }}
        className=' bg-sky-800 active:opacity-50 shadow-md py-1 w-full rounded-full'>Buy</button>
    </div>
  )
}

export default Book