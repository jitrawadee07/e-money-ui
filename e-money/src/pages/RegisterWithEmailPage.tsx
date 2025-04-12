import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterWithEmailPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('EN'); // Default language

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ES' : 'EN');
  };

  const handleClose = () => {
    navigate('/first-page');
  };

  const handleContinue = () => {
    // Navigate to OTP verification page with the email
    navigate('/otp-verification', { state: { email, isRegistration: true, isEmailLogin: true } });
  };

  const handlePhoneRegister = () => {
    // Navigate to phone registration page
    navigate('/register');
  };

  // Handle email input validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleTermsClick = () => {
    // Navigate to terms of use page (would be implemented in a real app)
    console.log('Navigate to terms of use');
    navigate('/terms');
  };

  const handlePrivacyClick = () => {
    // Navigate to privacy policy page (would be implemented in a real app)
    console.log('Navigate to privacy policy');
    navigate('/privacy');
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

      {/* Register form */}
      <div className="mt-24">
        <h1 className="text-3xl font-bold text-black">Register</h1>
        <p className="mt-2 text-gray-700">
          <span className="font-medium">Welcome</span> please register to use
        </p>

        {/* Email input */}
        <div className="mt-10">
          <label htmlFor="email" className="block mb-2 text-sm font-normal text-gray-600">
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="@gmail.com"
            value={email}
            onChange={handleEmailChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-green-500 focus:outline-none"
          />
        </div>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          className="mt-10 w-full rounded-full bg-green-500 py-4 font-medium text-white"
          disabled={!email.includes('@')}
        >
          Continue
        </button>

        {/* Terms of use notice */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>
            By registering, you accept our{' '}
            <button
              onClick={handleTermsClick}
              className="font-medium text-black hover:underline"
            >
              Terms of Use
            </button>{' '}
            and{' '}
            <button
              onClick={handlePrivacyClick}
              className="font-medium text-black hover:underline"
            >
              Privacy Policy
            </button>
          </p>
        </div>

        {/* Or register with */}
        <div className="mt-20 text-center text-gray-500">
          Or register in with
        </div>

        {/* Phone registration */}
        <button
          onClick={handlePhoneRegister}
          className="mt-4 flex w-full items-center justify-center rounded-full border border-gray-300 py-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-5 w-5 text-green-500">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Phone number</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterWithEmailPage;
