// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// --- Import all Page Components ---
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import UploadFlatDetailsPage from './pages/UploadFlatDetailsPage';
import FlatsAndProfilesPage from './pages/FlatsAndProfilesPage';
import ProfileViewPage from './pages/ProfileViewPage';
import MyFlatPage from './pages/MyFlatPage';
import QuestionnairePage from './pages/QuestionnairePage';
import AfterSearchPage from './pages/AfterSearchPage';  // ✅ Add this!

// --- Import Core Context & Private Route ---
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/Auth/PrivateRoute'; // Correct path

// Simple 404 Not Found Page Component
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-2xl font-bold text-gray-700">
      <p>404 - Page Not Found</p>
      <button onClick={() => navigate('/')} className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors">Go to Home</button>
    </div>
  );
};

// The main App component that sets up the Router and provides AuthContext
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/questionnaire" element={<QuestionnairePage />} />
          <Route path="/after-search/:city" element={<AfterSearchPage />} /> {/* ✅ Route now works */}

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/main-listings" element={<FlatsAndProfilesPage />} />
            <Route path="/profile-view/:id" element={<ProfileViewPage />} />
            <Route path="/profile-view/me" element={<ProfileViewPage />} />
            <Route path="/my-flat" element={<MyFlatPage />} />
            <Route path="/upload-flat" element={<UploadFlatDetailsPage />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
