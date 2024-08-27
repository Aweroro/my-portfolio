import React from 'react';
import AcademicCapIcon from '../../assets/academic-cap';
import BriefcaseIcon from '../../assets/briefcase';
import CodeBracketIcon from '../../assets/code-bracket';

const About = () => {
  return (
    <div>
      <div className='flex flex-col gap-7'>
        <h1 className='text-[#2962ff] text-3xl font-bold flex text-center justify-center uppercase'>
          <span className=''>-</span>
          <span>FrontEnd Developer</span>
          <span className=''>-</span>
        </h1>
        <p className=" text-white text-justify mx-2"> I'm a frontend developer passionate about creating beautiful and functional web applications. I am also quite versatile in adapting and implementing new technologies and ideas.</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl text-[#2962ff] font-semibold mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-6">
          <span className="bg-gray-200 border overflow-hidden transform transition-transform hover:scale-125 hover:shadow-2xl hover:border-[#2962ff] hover:font-bold text-gray-800 py-1 px-3 rounded-full">React</span>
          <span className="bg-gray-200 border overflow-hidden transform transition-transform hover:scale-125 hover:shadow-2xl hover:border-[#2962ff] hover:font-bold text-gray-800 py-1 px-3 rounded-full">Tailwind CSS</span>
          <span className="bg-gray-200 border overflow-hidden transform transition-transform hover:scale-125 hover:shadow-2xl hover:border-[#2962ff] hover:font-bold text-gray-800 py-1 px-3 rounded-full">JavaScript</span>
          <span className="bg-gray-200 border overflow-hidden transform transition-transform hover:scale-125 hover:shadow-2xl hover:border-[#2962ff] hover:font-bold text-gray-800 py-1 px-3 rounded-full">TypeScript</span>
          <span className="bg-gray-200 border overflow-hidden transform transition-transform hover:scale-125 hover:shadow-2xl hover:border-[#2962ff] hover:font-bold text-gray-800 py-1 px-3 rounded-full">Dart</span>
          <span className="bg-gray-200 border overflow-hidden transform transition-transform hover:scale-125 hover:shadow-2xl hover:border-[#2962ff] hover:font-bold text-gray-800 py-1 px-3 rounded-full">Flutter</span>
          <span className="bg-gray-200 border overflow-hidden transform transition-transform hover:scale-125 hover:shadow-2xl hover:border-[#2962ff] hover:font-bold text-gray-800 py-1 px-3 rounded-full">Git</span>
          <span className="bg-gray-200 border overflow-hidden transform transition-transform hover:scale-125 hover:shadow-2xl hover:border-[#2962ff] hover:font-bold text-gray-800 py-1 px-3 rounded-full">Github</span>
          <span className="bg-gray-200 border overflow-hidden transform transition-transform hover:scale-125 hover:shadow-2xl hover:border-[#2962ff] hover:font-bold text-gray-800 py-1 px-3 rounded-full">Next.js</span>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl text-[#2962ff] font-semibold mb-4">Experience</h2>
        <ul className="text-white timeline">
          <li className="mb-8">
            <div className="flex items-center">
              <span><AcademicCapIcon/></span>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Graduated with Bsc Computer Science</h3>
                <p className="text-gray-300">From Federal University of Agriculture, 2023</p>
              </div>
            </div>
          </li>
          <li className="mb-8">
            <div className="flex items-center">
              <span><BriefcaseIcon/></span>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Worked at BlueChip Technologies</h3>
                <p className="text-gray-300">As a Frontend Intern, 2022-2023</p>
              </div>
            </div>
          </li>
          <li className="mb-8">
            <div className="flex items-center">
              <span><CodeBracketIcon/></span>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Google Development Student Club, FUNAAB</h3>
                <p className="text-gray-300">As a Mobile Development Mentor, 2021-2022</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl text-[#2962ff] font-semibold mb-4">Skills/Abilities</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-200 rounded-lg">
            <p className="text-lg font-medium">💡 Problem Solver</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <p className="text-lg font-medium">🔍 High Attention to detail</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <p className="text-lg font-medium">🤝 Ability to collaborate well with others in a team</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <p className="text-lg font-medium">💡 Creation and Innovation of ideas</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <p className="text-lg font-medium">🤔 Critical thinking to make informed decisions</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <p className="text-lg font-medium">📍 Ability to quickly adapt and adjust</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <a href="/contact" className="bg-[#2962ff] text-white py-2 px-4 rounded">Get in Touch</a>
        <a href="/files/resume.pdf" className="bg-gray-500 text-white py-2 px-4 rounded">Download Resume</a>
      </div>
    </div>
  )
}


export default About;
