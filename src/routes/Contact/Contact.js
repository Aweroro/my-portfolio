import React from 'react'
import LocationIcon from '../../assets/location-icon';
import PhoneIcon from '../../assets/phone-icon';
import MailIcon from '../../assets/mail-icon'

const Contact = () => {
  return (
    <div className='py-10 text-white'>
      <h2 className="text-2xl font-bold mb-8 uppercase">Contact Info</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          {/* <h3 className="text-xl font-semibold mb-4">Get in touch</h3> */}
          <ul className="space-y-5">
            <li className='flex space-x-2'>
              <div className='flex border-gray-700'>
              <MailIcon/>
              </div>
              <a href="mailto:hadistic20@gmail.com" className="text-white hover:underline">
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
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Or send a message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
