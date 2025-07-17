
import React from 'react';

interface CardProps {
  title: string;
  imageUrl?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col ${className}`}>
      {imageUrl && <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <div className="text-slate-600 text-sm flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
