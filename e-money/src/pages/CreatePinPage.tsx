import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePinPage = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState<string[]>([]);

  const handleNumberClick = (number: number) => {
    if (pin.length < 6) {
      setPin([...pin, number.toString()]);
    }
  };

  const handleDeleteClick = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };

  const handleFaceClick = () => {
    // Face ID functionality would be implemented here in a real app
    console.log('Face ID clicked');
  };

  // Once PIN is complete (6 digits), navigate to home
  if (pin.length === 6) {
    // In a real app, you'd save the PIN securely
    setTimeout(() => {
      navigate('/home');
    }, 500);
  }

  return (
    <div className="flex h-screen w-screen flex-col bg-white p-6">
      {/* Main content */}
      <div className="mt-24 flex flex-1 flex-col">
        <h1 className="text-3xl font-bold text-black">Create a PIN code</h1>
        <p className="mt-2 text-gray-600">
          For safety in use
        </p>

        {/* PIN dots */}
        <div className="mt-16 flex justify-center space-x-4 w-[230px] mx-auto">
          {[0, 1, 2, 3, 4, 5].map((num) => (
            <div
              key={`pin-dot-${num}`}
              className={`h-3 w-3 rounded-full ${
                num < pin.length ? 'bg-[#4E862A]' : 'border border-[#4E862A]'
              }`}
            />
          ))}
        </div>

        {/* Forgot PIN link */}
        <div className="mt-6 text-center">
          <button className="text-gray-500 text-sm">
            Forgot PIN ?
          </button>
        </div>
        {/* Number pad */}
        <div className="mt-auto mb-8 flex flex-col items-center justify-center">
          {/* Row 1: 1-2-3 */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {[1, 2, 3].map(num => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className="flex h-[67px] w-[74px] items-center justify-center  text-[#335321] text-2xl font-medium rounded-md"
              >
                {num}
              </button>
            ))}
          </div>

          {/* Row 2: 4-5-6 */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {[4, 5, 6].map(num => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className="flex h-[67px] w-[74px] items-center justify-center text-[#335321] text-2xl font-medium rounded-md"
              >
                {num}
              </button>
            ))}
          </div>

          {/* Row 3: 7-8-9 */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {[7, 8, 9].map(num => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className="flex h-[67px] w-[74px] items-center justify-center text-[#335321] text-2xl font-medium rounded-md"
              >
                {num}
              </button>
            ))}
          </div>

          {/* Row 4: Face-0-Delete */}
          <div className="grid grid-cols-3 gap-8">
            <button
              onClick={handleFaceClick}
              className="flex h-[67px] w-[74px] items-center justify-center text-[#000000] rounded-md"
            >
              {/* Face icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8 text-[#000000]">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="9" cy="9" r="1" fill="currentColor" />
                <circle cx="15" cy="9" r="1" fill="currentColor" />
              </svg>
            </button>

            <button
              onClick={() => handleNumberClick(0)}
              className="flex h-[67px] w-[74px] items-center justify-center  text-[#335321] text-2xl font-medium rounded-md"
            >
              0
            </button>

            <button
              onClick={handleDeleteClick}
              className="flex h-[67px] w-[74px] items-center justify-center text-[#335321] rounded-md"
            >
              {/* Close icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-[#335321]">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePinPage;
