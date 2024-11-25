import React from 'react';

interface FiltersProps {
  onFilterChange: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  return (
    <div className="filters">
      <button onClick={() => onFilterChange('price')}>Sort by Price</button>
      <button onClick={() => onFilterChange('rating')}>Sort by Rating</button>
      <button onClick={() => onFilterChange('category')}>Sort by Category</button>
    </div>
  );
};

export default Filters;
