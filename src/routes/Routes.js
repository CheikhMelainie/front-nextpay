import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SendOTPPage from '../pages/SendOTPPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import SubscribeWalletPage from '../pages/SubscribeWalletPage'
import DashboardPage from '../pages/DashboardPage';
import WalletList from '../components/WalletList';
import TransactionDetail from '../components/TransactionDetail';
import TransactionHistory from '../components/TransactionHistory';
import HelpDetail from '../components/HelpDetail';
import Help from '../components/Help';
import ProfileUpdateForm from '../components/ProfileUpdateForm';
import ChangePassword from '../components/ChangePassword';
import SettingsPage from '../components/Settings';
import ConfirmPayment from '../components/ConfirmPayment';
import EnterOTP from '../components/EnterOTP';
import ConfirmPaymentOrigin from '../components/ConfirmPaymentOrigin';
import EnterOTPOrigin from '../components/EnterOTPOrign';
import About from '../components/About';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Licensing from '../components/Licensing';
import Contact from '../components/Contact';
import PasswordReset from '../components/PasswordReset';
import ResetPasswordConfirm from '../components/ResetPassword Confirmation';
import OtpSuccess from '../components/OtpSuccess';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SendOTPPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/subscribe-wallet" element={<SubscribeWalletPage />} />
      <Route path="/wallets" element={<WalletList />} />
      <Route path="/transactions" element={<TransactionHistory />} />
      <Route path="/transaction/:id" element={<TransactionDetail />} />
      <Route path="/help" element={<Help />}  />
      <Route path="/help/:id" element={<HelpDetail />} />
      <Route path="/profile" element={<ProfileUpdateForm />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/confirm-payment" element={<ConfirmPayment />} />
      <Route path="/confirm-payment-origin" element={<ConfirmPaymentOrigin />} /> 
      <Route path="/enter-otp" element={<EnterOTP />} />
      <Route path="/enter-otp-origin" element={<EnterOTPOrigin />} />
      <Route path="/otp-success" element={<OtpSuccess />} />

      <Route path="/about" element={<About />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
      <Route path="/licensing" element={<Licensing />} /> 
      <Route path="/contact" element={<Contact />} />
      <Route path="/passwordreset" element={<PasswordReset />} /> 
      <Route path="/passwordresetconfirmation" element={<ResetPasswordConfirm />} /> 
    </Routes>
  );
};

export default AppRoutes;
