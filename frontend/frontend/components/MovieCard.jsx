import React from 'react'
import Image from 'next/image'

const MovieCard = () => {
  return (
    <div className='h-[240px] w-[180px] bg-yellow-500 flex items-center flex-col gap-2 text-sm rounded-md'>
      <div className='h-[180px] w-[160px] mt-2 relative'>
        <Image 
          src='https://images.pexels.com/photos/3379937/pexels-photo-3379937.jpeg?auto=compress&cs=tinysrgb&w=600' 
          layout='fill'
          objectFit='cover' 
          alt='Movie Poster'
          className='rounded-md'
        />
      </div>
      <div className='text-center'>
        <h1 className='font-bold'>Spider Man</h1>
        <h3 className='text-right text-sm'>Jibon</h3>
      </div>
    </div>
  )
}

export default MovieCard
