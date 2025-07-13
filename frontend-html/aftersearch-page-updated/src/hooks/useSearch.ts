import { useState, useMemo } from 'react';
import { Flat } from '../types';

export const useSearch = (data: Flat[]) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredData = useMemo(() => {
    if (!searchValue.trim()) {
      return data;
    }

    const keyword = searchValue.toLowerCase();
    
    return data.filter(flat => {
      const flatMatch = flat.title.toLowerCase().includes(keyword) ||
        flat.desc.toLowerCase().includes(keyword) ||
        flat.loc.toLowerCase().includes(keyword) ||
        flat.tags.join(' ').toLowerCase().includes(keyword);
      
      const matesMatch = flat.mates && flat.mates.some(mate =>
        mate.title.toLowerCase().includes(keyword) ||
        mate.desc.toLowerCase().includes(keyword) ||
        mate.loc.toLowerCase().includes(keyword) ||
        mate.tags.join(' ').toLowerCase().includes(keyword)
      );
      
      return flatMatch || matesMatch;
    });
  }, [data, searchValue]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleReset = () => {
    setSearchValue('');
  };

  return {
    searchValue,
    filteredData,
    handleSearchChange,
    handleReset,
  };
};