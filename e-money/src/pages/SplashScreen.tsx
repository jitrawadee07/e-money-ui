import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import splashImage from '../assets/Splash_screen.png';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center"
      style={{ backgroundColor: '#92CA68' }}
    >
      {/* Logo container */}
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="z-10 flex items-center justify-center w-full h-full">
          <img
            src={splashImage}
            alt="E-Money Splash Screen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;


