import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Onboarding from './pages/Onboarding';
import FirstPage from './pages/FirstPage';
import LoginPage from './pages/LoginPage';
import LoginWithEmailPage from './pages/LoginWithEmailPage';
import OtpPage from './pages/OtpPage';
import CreatePinPage from './pages/CreatePinPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import RegisterWithEmailPage from './pages/RegisterWithEmailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/first-page" element={<FirstPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-email" element={<LoginWithEmailPage />} />
        <Route path="/otp-verification" element={<OtpPage />} />
        <Route path="/create-pin" element={<CreatePinPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage /> }/>
        <Route path="/register-email" element={<RegisterWithEmailPage /> }/>
        <Route path="/terms" element={<TermsOfUsePage /> }/>
        <Route path="/privacy" element={<PrivacyPolicyPage /> }/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
