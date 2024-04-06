import React from 'react';
import Icon from '../components/common/Icon';

interface SearchBarProps {
}

const SearchToolBar: React.FC<SearchBarProps> = () => {

  return (
    <div className="search-bar">
      <span>
       <Icon src="https://img.icons8.com/color/search" alt="Search Icon"/>
      </span>
    </div>
  );
};

export default SearchToolBar;
