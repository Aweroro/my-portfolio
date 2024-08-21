// import React from 'react'

// const About = () => {
//   return (
//     <div className='text-white'>
//        <p className="text-lg mb-4">
//         I'm a frontend developer passionate about creating beautiful and functional web applications.
//         I am also quite versatile in adapting and implementing new technologies and ideas.
//       </p>
//      <div className='flex justify-between'>
//      <div className='flex flex-col'>
//       <p>Some of the skills and technologies I'm familiar with are:</p>
//       <ul className='list-disc list-inside'>
//         <li>JavaScript</li>
//         <li>Typescript</li>
//         <li>React</li>
//         <li>Git</li>
//         <li>Github</li>
//         <li>Dart</li>
//         <li>Flutter</li>
//         <li>Tailwind CSS</li>
//       </ul>
//       </div>
//      <div className='flex flex-col'>
//      <p>I am also known for the following quallites:</p>
//       <ul className="list-disc list-inside">
//         <li>🚀 Aspiring React Developer</li>
//         <li>📚 Continuous Learner</li>
//         <li>💡 Problem Solver</li>
//       </ul>
//      </div>
//      </div>
//     </div>
//   )
// }

import React from 'react'
import AcademicCap from '../../assets/academic-cap';
import Briefcase from '../../assets/briefcase';

const About = () => {
  return (
    <div>
      <div className='flex flex-col gap-7'>
        <h1 className='text-white text-3xl font-bold flex text-center justify-center uppercase'>
          <span className='text-white'>-</span>
          <span>FrontEnd Developer</span>
          <span className='text-white'>-</span>
        </h1>
        <p className=" text-white mx-2"> I'm a frontend developer passionate about creating beautiful and functional web applications. I am also quite versatile in adapting and implementing new technologies and ideas.</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl text-white font-semibold mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">React</span>
          <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">Tailwind CSS</span>
          <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">JavaScript</span>
          <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">TypeScript</span>
          <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">Dart</span>
          <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">Flutter</span>
          <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">Git</span>
          <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">Github</span>
          <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">Next.js</span>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl text-white font-semibold mb-4">My Journey</h2>
        <ul className="text-white timeline">
          <li className="mb-8">
            <div className="flex items-center">
              <span><AcademicCap/></span>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Graduated with Bsc Computer Science</h3>
                <p className="text-gray-300">From Federal University of Agriculture, 2023</p>
              </div>
            </div>
          </li>
          <li className="mb-8">
            <div className="flex items-center">
              <span><Briefcase/></span>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Worked at BlueChip Technologies</h3>
                <p className="text-gray-300">As a Frontend Intern, 2021-2022</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl text-white font-semibold mb-4">Skills/Abilies</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-medium">💡 Problem Solver</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-medium">🔍 High Attention to detail</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-medium">🤝 Ability to collaborate well with others in a team</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-medium">💡 Creation and Innovation of ideas</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-medium">💡 Creation and Innovation of ideas</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-medium">💡 Creation and Innovation of ideas</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <a href="/contact" className="bg-blue-500 text-white py-2 px-4 rounded">Get in Touch</a>
        <a href="/resume.pdf" className="bg-gray-500 text-white py-2 px-4 rounded">Download Resume</a>
      </div>
    </div>
  )
}


export default About;
