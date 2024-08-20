import React from 'react'
import Card from '../../components/Card'
import DownloadCard from '../../components/DownloadCard';
import profile from '../../assets/profile.png';
import project from '../../assets/project.png';
import metrics from '../../assets/metrics.png';
import chat from '../../assets/chat.png';
import cv from '../../assets/cv.png';

const Content = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
     <div className='md:col-span-2 lg:col-span-2'>
     <Card 
      title='About Me' 
      description='I am a frontend developer interested in bringing and creating beautiful and responsive web applications to life.' 
      link='/about'
      imageURl={profile}
      />
     </div>
      <Card 
      title='Showcase' 
      description='Checkout my projects' 
      link='/projects'
      imageURl={project}
      />
      <Card 
      title='Technologies' 
      description='More about my skills...' 
      link='/skills'
      imageURl={metrics}
      />
      <Card 
      title='Contact Me' 
      description='Reach out to me' 
      link='/contact'
      imageURl={chat}
      />
      <DownloadCard
      title='Download Resume'
      description='Click to download my resume'
      imageURl={cv}
      fileName='resume.pdf'
      fileUrl='/files/resume.pdf'/>
    </div>
  )
}

export default Content;
