import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import LogData from './components/LogData';
import Medications from './components/Medications';
import Resources from './components/Resources';
import PlaceholderPage from './components/PlaceholderPage';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-primary flex flex-col">
      <Navbar />

      <div className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Authenticated Routes Container - could wrap in a generic layout */}
          <Route path="/dashboard" element={
            <main className="max-w-7xl mx-auto px-6 py-8"><Dashboard /></main>
          } />
          <Route path="/log-data" element={
            <main className="max-w-7xl mx-auto px-6 py-8"><LogData /></main>
          } />
          <Route path="/medications" element={
            <main className="max-w-7xl mx-auto px-6 py-8"><Medications /></main>
          } />
          <Route path="/reports" element={
            <main className="max-w-7xl mx-auto px-6 py-8"><PlaceholderPage title="Health Reports" /></main>
          } />
          <Route path="/resources" element={
            <main className="max-w-7xl mx-auto px-6 py-8"><Resources /></main>
          } />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
