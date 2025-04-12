import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [language, setLanguage] = useState('EN'); // Default language

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ES' : 'EN');
  };

  const handleClose = () => {
    navigate('/first-page');
  };

  const handleContinue = () => {
    // Navigate to OTP verification page with the phone number
    navigate('/otp-verification', { state: { phoneNumber } });
  };

  const handleGoogleLogin = () => {
    // Navigate to email login page
    navigate('/login-email');
  };

  // Handle phone number input formatting
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and basic formatting
    const input = e.target.value.replace(/[^\d-xX]/g, '');
    setPhoneNumber(input);
  };

  return (
    <div className="flex h-screen w-screen flex-col bg-white p-6">
      {/* Header with language selector and close button */}
      <div className="flex items-center justify-between">
        <button
          onClick={toggleLanguage}
          className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1"
        >
          <div className="mr-2 h-5 w-5 overflow-hidden rounded-full">
            <img src="https://img.icons8.com/color/48/usa-circular.png" alt="USA flag" className="h-full w-full object-cover" />
          </div>
          <span className="font-medium">{language}</span>
        </button>

        <button
          onClick={handleClose}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Login form */}
      <div className="mt-24">
        <h1 className="text-3xl font-bold text-black">Log in</h1>
        <p className="mt-2 text-gray-700">
          <span className="font-normal">Welcome</span> please login to use
        </p>

        {/* Phone input */}
        <div className="mt-10">
          <label htmlFor="phone" className="block mb-2 text-sm font-normal text-gray-600">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="0XX-XXX-XXXX"
            value={phoneNumber}
            onChange={handlePhoneInput}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-green-500 focus:outline-none"
          />
        </div>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          className="mt-10 w-full rounded-full bg-[#92CA68] py-4 font-medium text-white"
        >
          Continue
        </button>

        {/* Or log in with */}
        <div className="mt-20 text-center text-gray-500">
          Or log in with
        </div>

        {/* Google login */}
        <button
          onClick={handleGoogleLogin}
          className="mt-4 flex w-full items-center justify-center rounded-full border border-gray-300 py-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="mr-2 h-5 w-5">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
          </svg>
          <span className="font-medium">Google mail</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
