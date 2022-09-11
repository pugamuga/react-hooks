import React from 'react'
import Book from './Book'

const AllBooks = () => {
  return (
    <div className=' bg-emerald-100 flex w-full rounded-lg justify-between p-4'>
        <Book num={1}/>
        <Book num={3}/>
        <Book num={5}/>
        <Book num={10}/>
    </div>
  )
}

export default AllBooks