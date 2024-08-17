import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full h-[400px] flex justify-center gap-10'>
      <div className='h-full w-[400px] lg:w-[600px] bg-red-300'>
        <Image src='https://images.pexels.com/photos/375885/pexels-photo-375885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'width={600} height={200} alt='' className='' />
      </div>
      <div className='h-full hidden sm:block sm:w-[200px] lg:w-[300px] bg-red-400'>
    </div>
    </div>
  )
}

export default Hero
Hero