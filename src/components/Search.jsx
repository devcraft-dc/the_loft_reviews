import { useState } from 'react';
import search_icon from '../assets/search.svg';
import close_icon from '../assets/close_button.svg';

export const Search = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchText, setSearchText] = useState('');

  const searchInputLayout = (
    <div className="flex-1 p-3 justify-center">
      <input
        className="text-md max-md:text-sm max-sm:text-xs w-full h-9 max-md:h-8 max-sm:h-7 rounded p-3 outline-none"
        type="text"
        placeholder="Название блюда"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );

  return (
    <div
      className={`flex flex-row-reverse items-center ${
        showInput && 'bg-main-black border-b-[3px]'
      }`}
    >
      <button
        className="p-3 bg-main-black rounded-tl-md"
        onClick={() => setShowInput(!showInput)}
      >
        <img
          className="w-8 max-md:w-7 max-sm:w-6"
          src={showInput ? close_icon : search_icon}
          alt="icon"
        />
      </button>

      {showInput && searchInputLayout}
    </div>
  );
};
