import React from 'react'
import LocationIcon from '../../assets/location-icon';
import PhoneIcon from '../../assets/phone-icon';
import MailIcon from '../../assets/mail-icon'
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='py-10 text-white'>
      <h2 className="text-lg font-bold ml-24 mb-6 uppercase">Contact Info</h2>
      <div className="flex flex-col md:flex-row mx-24 gap-x-48">
        <div className='flex flex-col'>
        <div className="flex-1 mb-4">
          {/* <h3 className="text-xl font-semibold mb-4">Get in touch</h3> */}
          <ul className="space-y-12">
            <li className='flex space-x-2'>
              <MailIcon/>
              <a href="mailto:hadistic20@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                hadistic20@gmail.com
              </a>
            </li>
            <li className='flex space-x-2'>
              <PhoneIcon/>
              <p>08082742862</p>
            </li>
            <li className='flex space-x-2'>
              <LocationIcon/>
              <p>Lagos, Nigeria</p>
            </li>
          </ul>
        </div>
        <h2 className="text-lg font-bold mb-6 uppercase">Social Info</h2>
        <div className="flex space-x-6 mb-24">
            <a href="https://github.com/Aweroro" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-[#2962ff]">
              <FaGithub size={36} />
            </a>
            <a href="https://x.com/AweroroH?t=Lf6w7L3b4jE1GLtG5Xuwow&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-[#2962ff]">
              <FaTwitter size={36} />
            </a>
            <a href="https://www.instagram.com/the_real_hardee?igsh=ZnFuYmhvcHhqbndn" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-[#2962ff]">
              <FaInstagram size={36} />
            </a>
        </div>
        </div>
        <div className="flex-1 border rounded-lg p-4">
          <div className='flex gap-2'>
          <h3 className="text-5xl font-semibold mb-4">Get in</h3>
          <h3 className="text-5xl text-[#2962ff] font-semibold mb-4">touch.</h3>
          </div>
          <form className="space-y-4 px-3">
            <div className='text-white'>
              <input type="text" placeholder="Name" id="name" name="name" className="w-full p-2 border rounded border-gray-900 bg-gray-900 placeholder:text-gray-400 placeholder:font-bold " required />
            </div>
            <div className='text-white'>
              <input type="email" placeholder="E-mail" id="email" name="email" className="w-full p-2 border rounded border-gray-900 bg-gray-900 placeholder:text-gray-400 placeholder:font-bold" required />
            </div>
            <div className='text-white'>
              <input type="text" placeholder="Subject" id="subject" name="subject" className="w-full p-2 border rounded border-gray-900 bg-gray-900 placeholder:text-gray-400 placeholder:font-bold" required />
            </div>
            <div className='text-white'>
              <textarea id="message" placeholder="Message" name="message" rows="4" className="w-full p-2 border rounded border-gray-900 bg-gray-900 placeholder:text-gray-400 placeholder:font-bold" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
