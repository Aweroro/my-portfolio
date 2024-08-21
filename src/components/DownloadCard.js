import React from 'react';
import PlusCircleIcon from '../assets/plus-circle';

const DownloadCard = ({ title, description, fileName, fileUrl, imageURl }) => {
  return (
    <a
      href={fileUrl}
      download={fileName}
      className="cursor-pointer bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl block"
    >
      <div className='relative flex justify-center w-full h-48 pt-4'>
      <img 
      src={imageURl} 
      alt={title} 
      className="h-full object-cover"
       />
      </div>
      <div className="p-4">
        <h2 className="text-lg text-[#2962ff] font-semibold mb-2">{title}</h2>
        <p className="text-white">{description}</p>
      </div>
      <div className="absolute bottom-4 right-4 bg-[#2962ff] text-white p-2 rounded-full">
        <PlusCircleIcon/>
      </div>
    </a>
  );
};

export default DownloadCard;
