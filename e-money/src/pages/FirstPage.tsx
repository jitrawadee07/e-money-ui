import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handCoinsImage from '../assets/hand-coins.png';

const FirstPage = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('EN'); // Default language

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ES' : 'EN');
  };

  const handleLogin = () => {
    // Navigate to login page
    navigate('/login');
  };

  const handleSignUp = () => {
    // Navigate to registration page
    navigate('/register');
  };

  return (
    <div className="flex h-screen w-screen flex-col bg-white p-6">
      {/* Language selector */}
      <div className="mb-8">
        <button
          onClick={toggleLanguage}
          className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1"
        >
          <div className="mr-2 h-5 w-5 overflow-hidden rounded-full">
            <img src="https://img.icons8.com/color/48/usa-circular.png" alt="USA flag" className="h-full w-full object-cover" />
          </div>
          <span className="font-medium">{language}</span>
        </button>
      </div>

      {/* Main content - takes most of the screen */}
      <div className="flex flex-1 flex-col">
        {/* Heading text - positioned at the top with more space */}
        <div className="mb-12 mt-4">
          <h1 className="text-4xl font-bold text-black leading-tight">
            Lorem ipsum dolor sit amet consectetur. Mauris
          </h1>
        </div>

        {/* Hand with flying coins illustration - centered */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Main hand with coins image */}
          <div className="w-72 h-72 relative">
            <img
              src={handCoinsImage}
              alt="Hand with gold coins"
              className="w-full h-full object-contain"
            />

            {/* Flying coins animation effect */}
            <div className="absolute top-0 left-1/4 w-8 h-8 animate-bounce">
              <div className="w-full h-full rounded-full bg-yellow-400 flex items-center justify-center text-yellow-700 font-bold">$</div>
            </div>
            <div className="absolute top-1/4 right-1/4 w-6 h-6 animate-bounce" style={{ animationDelay: '0.2s' }}>
              <div className="w-full h-full rounded-full bg-yellow-400 flex items-center justify-center text-yellow-700 font-bold">$</div>
            </div>
            <div className="absolute bottom-1/3 left-1/3 w-7 h-7 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <div className="w-full h-full rounded-full bg-yellow-400 flex items-center justify-center text-yellow-700 font-bold">$</div>
            </div>
          </div>
        </div>

        {/* Button section - at the bottom with proper sizing */}
        <div className="mt-auto flex gap-4">
          <button
            onClick={handleLogin}
            className="flex-1 rounded-full border border-gray-300 py-4 font-medium text-gray-800"
          >
            Login
          </button>
          <button
            onClick={handleSignUp}
            className="flex-grow rounded-full bg-[#92CA68] py-4 text-white font-medium"
          >
            New here? Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
