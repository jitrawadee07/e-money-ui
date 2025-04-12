import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Updated onboarding data to match the image
const onboardingData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur. Sit",
    description: "",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur. Sit",
    description: "",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur. Sit",
    description: "",
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('EN'); // Default language

  const handleNext = () => {
    if (currentSlide < onboardingData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/first-page'); // Navigate to first page instead of home
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ES' : 'EN');
  };

  return (
    <div className="flex h-screen w-screen flex-col bg-white p-6">
      {/* Language selector */}
      <div className="mb-6">
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

     {/* Progress bar */}
      <div className="mb-8 flex w-full space-x-2">
        {onboardingData.map((item) => {
          const isCompleted = item.id - 1 < currentSlide;
          const isCurrent = item.id - 1 === currentSlide;

          const backgroundColor = isCompleted
            ? '#67A939' // 100%
            : isCurrent
            ? 'rgba(103, 169, 57, 0.5)' // 50%
            : 'rgba(103, 169, 57, 0.5)'; // gray-200

          return (
            <div
              key={`progress-${item.id}`}
              className="h-1.5 flex-1 rounded-full"
              style={{ backgroundColor }}
            />
          );
        })}
      </div>


      {/* Main content area - takes up most of the space */}
      <div className="flex flex-col justify-between h-full">
        {/* Heading text */}
        <div className="mt-auto mb-8">
          <h1 className="text-3xl font-bold text-black leading-tight ">
            {onboardingData[currentSlide].title}
          </h1>
        </div>

        {/* Button */}
          <div className="mt-auto">
            <button
              onClick={handleNext}
              className="w-full rounded-full bg-[#92CA68] py-4 text-white font-medium text-lg"
            > <h1>
            Get started
          </h1>
            </button>
          </div>

      </div>
    </div>
  );
};

export default Onboarding;
