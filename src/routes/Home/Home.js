import React from 'react'
import Content from './Content'

const Home = () => {
  return (
    <div className='flex justify-center'>
      <div className='relative flex flex-col mt-5'>
      <h2 className="text-[#2962ff] text-3xl font-bold mb-4">FrontEnd Developer</h2>
      <p className='text-white'>Welcome to my personal webpage!</p>
      </div>
      <div className='flex'>
      <Content/>
      </div>
    </div>
  )
}

export default Home
