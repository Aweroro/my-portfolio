import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlusCircleIcon from '../assets/plus-circle.jsx';

const Card = ({ title, description, link, imageURl }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(link);
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
    >
      <div className='relative flex justify-center w-full h-48 pt-4'>
      <img 
      src={imageURl} 
      alt={title} 
      className="h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className='absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full'>
        <PlusCircleIcon/>
      </div>
    </div>
  );
};

export default Card;
