'use client'
import MyMovieCard from '@/components/MyMovieCard'
import React, { useState } from 'react'

const Page = () => {
  const [username, setUsername] = useState('');

  return (
    <div className='bg-zinc-800 w-full min-h-[calc(100vh-48px)] text-yellow-500 relative px-10 py-8'>
      
      {/* Header Section */}
      <div className='flex justify-between items-center mb-8'>
        <div className='text-lg font-semibold'>
          {username ? `Welcome, ${username}` : 'User Name'}
        </div>
        <button className='bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500'>
          Create Movie
        </button>
      </div>

      {/* Title Section */}
      <h1 className='text-2xl font-bold mb-6'>My Movies</h1>

      {/* Movies List */}
      <div className='w-full  flex flex-col gap-6 items-center'>
        <MyMovieCard />
        <MyMovieCard />
        <MyMovieCard />
        {/* Add more <MyMovieCard /> components as needed */}
      </div>
    </div>
  )
}

export default Page;
