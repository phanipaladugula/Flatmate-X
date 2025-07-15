// src/components/LoginPage/TextAreaGroup.jsx
import React from 'react';

const TextAreaGroup = ({ label, id, name, rows = 4, placeholder, value, onChange, required }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-auth-primary focus:border-auth-primary sm:text-sm"
        required={required}
      ></textarea>
    </div>
  );
};

export default TextAreaGroup;