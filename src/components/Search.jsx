import search_icon from '../assets/search.svg';
import { useState } from 'react';

export const Search = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchText, setSearchText] = useState('');

  const searchInputLayout = (
    <div className='flex-1 p-3 justify-center'>
      <input className='text-md w-[100%] h-9 rounded p-3 outline-none' type="text" placeholder="Начните вводить название..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    </div>
  );

  // remove mt-5 after changes

  return (
    <div className={`flex flex-row-reverse items-center h-[4rem] mt-5 ${showInput && 'bg-main-black'}`}>
      <button className='p-3 bg-main-black rounded-tl-md ' onClick={() => setShowInput(!showInput)}>
        <img className='w-10' src={search_icon} alt="search" />
      </button>

      {showInput && searchInputLayout}
    </div>
  );
};
