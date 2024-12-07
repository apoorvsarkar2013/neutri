import React from "react";
import welcomeImage1 from "../../public/images/welcome-image-1.webp";
import welcomeImage2 from "../../public/images/welcome-image-2.webp";
import welcomeImage3 from "../../public/images/welcome-image-3.webp";

const Welcome = () => {
  const arrayOfWelcomeImages = [
    {
      id: 1,
      image: welcomeImage1,
      text: "Ready for some wins? Start tracking, it’s easy!",
    },
    {
      id: 2,
      image: welcomeImage2,
      text: "Discover the impact of your food and fitness",
    },
    {
      id: 3,
      image: welcomeImage3,
      text: "And make mindful eating a habit for life",
    },
  ];

  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4'>
      <div className='text-center mb-16'>
        <h1 className='text-3xl font-bold text-blue-900'>
          Welcome to <span className='text-blue-500'>Neutri</span>
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {arrayOfWelcomeImages.map((item) => {
          return (
            <div key={item.id} className='rounded-2xl shadow-md p-4'>
              <img
                src={item.image}
                alt={item.image}
                className='w-full h-72 rounded-2xl object-fill mb-4'
                id={`image-${item.id}`}
              />
              <label
                htmlFor={`image-${item.id}`}
                className='text-gray-700 text-center'>
                {item.text}
              </label>
            </div>
          );
        })}
      </div>
      <div className='mt-16'>
        <button className='w-80 h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Welcome;
