// src/components/LoginPage/InputGroup.jsx
import React from 'react';

const InputGroup = ({ label, id, name, type = 'text', placeholder, value, onChange, required, min, step }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-auth-primary focus:border-auth-primary sm:text-sm"
        required={required}
        min={min}
        step={step}
      />
    </div>
  );
};

export default InputGroup;