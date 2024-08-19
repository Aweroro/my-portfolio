import React from 'react'
import Card from '../../components/Card'

const Content = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
     <div className='md:col-span-2 lg:col-span-2'>
     <Card 
      title='About Me' 
      description='I am a frontend developer interested in bringing and creating beautiful and responsive web applications to life.' 
      link='/about'
      />
     </div>
      <Card 
      title='Showcase' 
      description='Checkout my projects' 
      link='/projects'/>
      <Card 
      title='Technologies' 
      description='More about my skills...' 
      link='/skills'/>
      <Card 
      title='Contact Me' 
      description='Reach out to me' 
      link='/contact'/>
    </div>
  )
}

export default Content;
