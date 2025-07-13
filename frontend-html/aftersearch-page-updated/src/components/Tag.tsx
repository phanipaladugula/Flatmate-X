import React from 'react';

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span className="bg-tag-bg text-tag-text text-sm rounded-full py-1 px-3 font-medium inline-block">
      {children}
    </span>
  );
};

export default Tag;