// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
// useNavigate is not used here as context itself should not navigate directly
// It's used by components that consume this context.

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedAuth = localStorage.getItem('isLoggedIn');
    return storedAuth === 'true';
  });

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    // --- MODIFIED CODE BLOCK FOR USER ---
    try {
      return storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
    } catch (e) {
      console.error("AuthContext: Failed to parse user from localStorage. Clearing corrupted entry.", storedUser, e);
      localStorage.removeItem('user'); // Clear the corrupted entry
      return null;
    }
    // --- END MODIFIED BLOCK ---
  });

  const [lastClickedProfileId, setLastClickedProfileId] = useState(() => {
    const storedId = localStorage.getItem('lastClickedProfileId');
    // --- MODIFIED CODE BLOCK FOR LAST CLICKED PROFILE ID ---
    return storedId && storedId !== "undefined" ? storedId : null;
    // --- END MODIFIED BLOCK ---
  });

  // Update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    // Ensure we store stringified JSON or remove the item
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    if (lastClickedProfileId) {
      localStorage.setItem('lastClickedProfileId', lastClickedProfileId);
    } else {
      localStorage.removeItem('lastClickedProfileId');
    }
  }, [lastClickedProfileId]);


  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData); // This will trigger the useEffect to store user
    console.log('User logged in:', userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null); // This will trigger the useEffect to remove user
    setLastClickedProfileId(null); // This will trigger the useEffect to remove lastClickedProfileId
    console.log('User logged out');
  };

  const storeLastClickedProfile = (profileId) => {
    setLastClickedProfileId(profileId);
    console.log('Stored last clicked profile ID:', profileId);
  };

  const clearLastClickedProfile = () => {
    setLastClickedProfileId(null);
    console.log('Cleared last clicked profile ID');
  };

  const authContextValue = {
    isLoggedIn,
    user,
    login,
    logout,
    lastClickedProfileId,
    storeLastClickedProfile,
    clearLastClickedProfile,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};