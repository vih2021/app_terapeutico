import Home from './pages/Home.js';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import IAService from './pages/IAService.js';
import Professional from './pages/Professional.js';
import EmotionLog from './pages/EmotionLog.js';

export default function routes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/iaservice" element={<IAService />} />
      <Route path="/professional" element={<Professional />} />
      <Route path="/emotion-log" element={<EmotionLog />} />
    </Routes>
  );
}
