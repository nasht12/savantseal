import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="form-control w-full">
      <div className="input-group">
        <input type="text" placeholder="Search…" className="input input-bordered w-full" />
        <button className="btn btn-square">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
