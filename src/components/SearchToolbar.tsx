import React from 'react';
import Icon from '../components/common/Icon';

interface SearchBarProps {
}

const SearchToolBar: React.FC<SearchBarProps> = () => {

  return (
    <div className="search-bar">
      <span>
       <Icon src="../assets/search.png" alt="Search Icon"/>
      </span>
    </div>
  );
};

export default SearchToolBar;
