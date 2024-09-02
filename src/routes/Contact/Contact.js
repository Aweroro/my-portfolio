import React from 'react'
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  return (
    <div className='py-10 text-white'>
      <h2 className="text-lg font-bold ml-6 md:ml-24 mb-6 uppercase">Contact Info</h2> 
      <div className="flex flex-col md:flex-row mx-6 md:mx-24 gap-10 md:gap-x-48"> 
        
        <div className='flex flex-col'>
          <div className="flex-1 mb-8">
            <ul className="space-y-6"> 
              <li className='flex space-x-4 items-center'>
                <EnvelopeIcon className='w-8 h-8 p-1 md:w-12 md:h-12 md:p-2 rounded-lg bg-slate-800'/> {/* Adjusted icon size */}
                <a href="mailto:hadistic20@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  hadistic20@gmail.com
                </a>
              </li>
              <li className='flex space-x-4 items-center'>
                <PhoneIcon className='w-8 h-8 p-1 md:w-12 md:h-12 md:p-2 rounded-lg bg-slate-800'/> {/* Adjusted icon size */}
                <p>08082742862</p>
              </li>
              <li className='flex space-x-4 items-center'>
                <MapPinIcon className='w-8 h-8 p-1 md:w-12 md:h-12 md:p-2 rounded-lg bg-slate-800'/> {/* Adjusted icon size */}
                <p>Lagos, Nigeria</p>
              </li>
            </ul>
          </div>

          <h2 className="text-lg font-bold mb-6 uppercase">Social Info</h2>
          <div className="flex space-x-6 mb-12 md:mb-24">
            <a 
              href="https://github.com/Aweroro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-100 hover:text-[#2962ff]">
              <FaGithub size={32} /> 
            </a>
            <a 
              href="https://x.com/AweroroH?t=Lf6w7L3b4jE1GLtG5Xuwow&s=09" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-100 hover:text-[#2962ff]">
              <FaTwitter size={32} /> 
            </a>
            <a 
              href="https://www.instagram.com/the_real_hardee?igsh=ZnFuYmhvcHhqbndn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-100 hover:text-[#2962ff]">
              <FaInstagram size={32} /> 
            </a>
          </div>
        </div>
        
        <div className="flex-1 border rounded-lg p-4 md:p-6">
          <div className='flex gap-2 items-baseline'>
            <h3 className="text-4xl md:text-5xl font-semibold mb-4">Get in</h3> {/* Adjusted font size for smaller screens */}
            <h3 className="text-4xl md:text-5xl text-[#2962ff] font-semibold mb-4">touch.</h3> {/* Adjusted font size for smaller screens */}
          </div>
          <form className="space-y-4">
            <div className='text-white'>
              <input 
                type="text" 
                placeholder="Name" 
                id="name" 
                name="name" 
                className="w-full p-2 md:p-3 border rounded border-gray-900 bg-gray-900 placeholder:text-gray-400 placeholder:font-bold" required 
              />
            </div>
            <div className='text-white'>
              <input 
                type="email" 
                placeholder="E-mail" 
                id="email" 
                name="email" 
                className="w-full p-2 md:p-3 border rounded border-gray-900 bg-gray-900 placeholder:text-gray-400 placeholder:font-bold" required 
              /> 
            </div>
            <div className='text-white'>
              <input 
                type="text" 
                placeholder="Subject" 
                id="subject" 
                name="subject" 
                className="w-full p-2 md:p-3 border rounded border-gray-900 bg-gray-900 placeholder:text-gray-400 placeholder:font-bold" required 
              /> 
            </div>
            <div className='text-white'>
              <textarea 
                id="message" 
                placeholder="Message" 
                name="message" 
                rows="4" 
                className="w-full p-2 md:p-3 border rounded border-gray-900 bg-gray-900 placeholder:text-gray-400 placeholder:font-bold resize-none" required
              ></textarea> 
            </div>
            <button 
              type="submit" 
              className="bg-blue-600 text-white w-full py-2 md:py-3 rounded hover:bg-blue-700 transition-colors">
              Send Message
            </button> 
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
