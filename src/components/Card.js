import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlusCircleIcon from '../assets/plus-circle-icon.jsx';

const Card = ({ title, description, link, imageURl }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(link);
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative cursor-pointer bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
      style={{height: '100%'}}
    >
      <div className='relative flex justify-center w-full h-48 pt-4'>
      <img 
      src={imageURl} 
      alt={title} 
      className="h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
      <div className='mb-4'>
        <h2 className="text-lg text-[#2962ff] font-semibold mb-2">{title}</h2>
        <p className="text-white text-base text-justify break-words whitespace-pre-line">{description}</p>
      </div>
     <div className='self-end mt-4'>
     <div className='absolute bottom-4 right-4 bg-[#2962ff] text-white p-2 rounded-full'>
        <PlusCircleIcon/>
      </div>
     </div>
      </div>
    </div>
  );
};

export default Card;
