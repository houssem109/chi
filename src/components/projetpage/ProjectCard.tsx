import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  photos: string[]; // Array of photo URLs
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, photos }) => {
  // State to keep track of the current photo index
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Function to go to the next photo
  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length); // Loop back to the first photo when the end is reached
  };

  // Function to go to the previous photo
  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length // Loop to the last photo when reaching the beginning
    );
  };

  return (
    <div className="flex flex-col items-center bg-[#171717] text-white rounded-lg p-10 mb-2 shadow-lg">
      {/* Project Title */}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      {/* Photo and Navigation */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Arrow */}
        <button
          className="absolute z-30 left-14 bg-gray-700 hover:bg-gray-600 text-3xl font-bold text-white w-14 h-14 flex items-center justify-center rounded-full shadow-md"
          onClick={goToPreviousPhoto}
        >
          &#8592;
        </button>

        {/* Photo */}
        <div className="w-96 h-80 bg-gray-900 rounded-md flex items-center justify-center">
          <img
            src={photos[currentPhotoIndex]}
            alt={`${title} photo`}
            className="object-cover w-96 h-80 rounded-md"
          />
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-14 z-30 bg-gray-700 hover:bg-gray-600 text-white text-3xl font-bold w-14 h-14 flex items-center justify-center rounded-full shadow-md"
          onClick={goToNextPhoto}
        >
          &#8594;
        </button>
      </div>

      {/* Description */}
      <p className="text-lg font-bold text-gray-300 mt-4">{description}</p>
    </div>
  );
};

export default ProjectCard;
