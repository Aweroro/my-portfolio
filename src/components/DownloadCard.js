import React from 'react';
import PlusCircleIcon from '../assets/plus-circle';

const DownloadCard = ({ title, description, fileName, fileUrl, imageURl }) => {
  return (
    <a
      href={fileUrl}
      download={fileName}
      className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl block"
    >
      <img src={imageURl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full">
        <PlusCircleIcon/>
      </div>
    </a>
  );
};

export default DownloadCard;
