import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-900 '>
      <div className='w-full px-10 h-12 flex items-center justify-end sm:justify-between '>
        <div className='hidden sm:block'>
            <h1 className='bg-gradient-to-r from-yellow-400 to-yellow-700 px-2 rounded-md text-black font-bold'>Movie Rating Site</h1>
        </div>
        <div className='flex gap-4 text-sm items-center text-gray-300'>
        <Link href="/" passHref>
            <sapn className='hover:text-yellow-500 transition-colors duration-200'>Home</sapn>
          </Link>
          <Link href="/mymovies" passHref>
            <span className='hover:text-yellow-500 transition-colors duration-200'>My Movies</span>
          </Link>
          <Link href="/profile" passHref>
            <span className='hover:text-yellow-500 transition-colors duration-200'>Profile</span>
          </Link>
        </div>
            
      </div>
    </div>
  )
}

export default Navbar
