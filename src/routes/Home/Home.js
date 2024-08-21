import React from 'react'
import Content from './Content'

const Home = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col'>
      <h2 className="text-[#2962ff] text-3xl font-bold mb-4">FrontEnd Developer</h2>
      <p className='text-white'>Welcome to my personal webpage!</p>
      </div>
      <Content/>
    </div>
  )
}

export default Home
