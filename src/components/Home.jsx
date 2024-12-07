import React from "react";
import homePageImage from "../../public/images/hero-phone-small.webp";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className='mx-auto my-44 max-w-screen-lg flex items-center p-6 h-96'>
      <div className='flex-1 flex flex-col gap-6 text-center lg:text-left'>
        <h1 className='text-4xl font-bold leading-tight'>
          Reach your goals <span className='text-blue-500'>with Neutri</span>
        </h1>
        <p className='text-lg text-gray-600'>
          Build healthy habits with the all-in-one food, exercise, and calorie
          tracker.
        </p>
        <Link to='/welcome'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-2xl w-44 h-14'>
            START TODAY
          </button>
        </Link>
      </div>
      <div className='flex'>
        <img
          className='w-[250px] h-auto rounded-xl shadow-lg'
          src={homePageImage}
          alt={homePageImage}
        />
      </div>
    </div>
  );
};

export default Home;
