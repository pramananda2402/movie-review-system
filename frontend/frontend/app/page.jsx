import React from 'react'
import Navbar from '@/components/Navbar.jsx'
import Hero from '../components/Hero'
import MoveList from '../components/MoveList'

const Home = () => {
  return (
    <div>
      
      <Hero />
      {/* popular movie section  */}
      <div className='px-[40px] mt-4'>
        <h1>Popular Movies</h1>
        <MoveList />

      </div>

      {/* Best rated movie section  */}
      <div className='px-[40px] mt-4'>
        <h1>All Movies</h1>
        <MoveList />

      </div>
      <div className='h-[100px] w-full bg-black'>

      </div>

      
    </div>
  )
}

export default Home
