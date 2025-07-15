// src/components/LoginPage/FileInputGroup.jsx
import React from 'react';

const FileInputGroup = ({ label, id, name, accept = 'image/*', multiple = false, onChange, helperText }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="file"
        id={id}
        name={name}
        accept={accept}
        multiple={multiple}
        onChange={onChange}
        className="mt-1 block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-auth-primary file:text-white
          hover:file:bg-auth-primary-dark cursor-pointer"
      />
      {helperText && <p className="mt-1 text-xs text-gray-500">{helperText}</p>}
    </div>
  );
};

export default FileInputGroup;