// src/components/LoginPage/MessageBox.jsx
import React, { useEffect } from 'react';

const MessageBox = ({ message, isError, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed top-5 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-lg z-50 transition-opacity duration-500 ease-in-out
        ${isError ? 'bg-red-500' : 'bg-green-500'}
        ${show ? 'opacity-100' : 'opacity-0'}`}
    >
      <p className="text-white text-center">{message}</p>
    </div>
  );
};

export default MessageBox;