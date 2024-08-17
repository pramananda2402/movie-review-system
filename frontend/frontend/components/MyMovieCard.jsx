import React from 'react';

const MyMovieCard = () => {
  return (
    <div className='w-5/6  p-4 bg-white shadow-lg rounded-lg flex items-center space-x-4'>
      {/* Movie Image */}
      <div className='w-16 h-16 bg-gray-300 rounded overflow-hidden '>
        <img 
          src="movie-image-url" 
          alt="Movie" 
          className='object-cover w-full h-full'
        />
      </div>

      {/* Movie Details */}
      <div className='flex-1'>
        <h2 className='text-lg font-semibold text-gray-800'>
          Movie Name
        </h2>
        <p className='text-sm text-gray-600'>
          Created at: Aug 17, 2024
        </p>
        <p className='text-sm text-gray-600'>
          Rating: ⭐ 4.5/5
        </p>
      </div>

      {/* Action Button */}
      <div>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
          Details
        </button>
      </div>
    </div>
  );
};

export default MyMovieCard;
