import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OtpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [timer, setTimer] = useState(59);
  const [error, setError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Get data from location state
  const { email, phoneNumber, isEmailLogin } = location.state || {};

  // Determine the contact info to display
  const contactInfo = isEmailLogin
    ? (email || 'ekillsung@gmail.com')
    : (phoneNumber || '+6684946260');

  // Countdown timer effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleClose = () => {
    navigate(isEmailLogin ? '/login-email' : '/login');
  };

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError(false);

      // Auto focus to next input
      if (value !== '' && index < 5) {
        const nextInput = inputRefs.current[index + 1];
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) prevInput.focus();
    }
  };

  const verifyOtp = () => {
    const otpString = otp.join('');

    // For demo purposes, consider "846109" as the correct OTP
    if (otpString === '846109') {
      navigate('/create-pin');
    } else {
      setError(true);
    }
  };

  const handleResendOtp = () => {
    setOtp(Array(6).fill(''));
    setTimer(59);
    setError(false);
  };

  // Auto-verify when OTP is complete
  useEffect(() => {
    const isOtpComplete = otp.every(digit => digit !== '');
    if (isOtpComplete) {
      setTimeout(verifyOtp, 300);
    }
  }, [otp]); // eslint-disable-line react-hooks/exhaustive-deps

  // For testing: set a PIN value
  const setTestOtp = () => {
    setOtp(['8', '4', '6', '1', '0', '9']);
  };

  return (
    <div className="flex h-screen w-screen flex-col bg-white p-6">
      {/* Close button */}
      <div className="flex justify-end">
        <button
          onClick={handleClose}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main content */}
      <div className="mt-20">
        <h1 className="text-3xl font-bold text-black">OTP Verification</h1>
        <p className="mt-2 text-gray-700">
          We have sent an OTP to {contactInfo}
        </p>
        <p>ใส่รหัส otp 846109เพื่อไปต่อ</p>

        {/* OTP input fields */}
        <div className="mt-16">
          <div className="flex justify-between">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={`otp-field-${index}`} className="relative w-12">
                <input
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  maxLength={1}
                  value={otp[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="h-12 w-full border-0 bg-transparent text-center text-2xl text-black focus:outline-none"
                  autoFocus={index === 0}
                />
                <div className={`absolute bottom-0 h-0.5 w-full ${error ? 'bg-[#92CA68]' : 'bg-[#92CA68]'}`} />
              </div>
            ))}
          </div>

          {/* Error message */}
          {error && (
            <div className="mt-4 flex items-center text-red-500">
              <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-red-500">
                <span className="text-red-500">!</span>
              </div>
              <span className="text-sm">The OTP is incorrect. Please try again.</span>
            </div>
          )}
        </div>

        {/* Referral and resend section */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-700">Referral : we3f8</p>
          <div className="mt-1">
            <p className="text-sm text-gray-400">
              Didn't receive the OTP ? Try again in 
              {timer > 0 ? (
                <span className="ml-1 text-red-500">{timer} secs</span>
              ) : (
                <button
                  onClick={handleResendOtp}
                  className="ml-1 text-blue-500 focus:outline-none"
                >
                  Resend OTP
                </button>
              )}
            </p>
          </div>
        </div>

        {/* Hidden button for demo purposes - click this to set the correct OTP */}
        <div className="mt-8 opacity-0">
          <button onClick={setTestOtp}>Set Test OTP</button>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
