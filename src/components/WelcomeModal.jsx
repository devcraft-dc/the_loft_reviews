import { useState } from 'react';
import modal_close from '../assets/icons/modal_close.svg';
import modal_logo from '../assets/modal_logo.png';

export const WelcomeModal = ({ setModalActive }) => {
  const [checked, setChecked] = useState(false);
  const saveToLocalStorage = () => {
    setModalActive(true);
    localStorage.setItem('modalChecked', checked);
  };
  return (
    <div className="w-96 max-md:w-80 max-sm:w-72 bg-main-black rounded-lg fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        <button
          className="absolute top-4 right-[20px] max-md:w-8 max-sm:w-6"
          onClick={saveToLocalStorage}
        >
          <img src={modal_close} alt="close icon" />
        </button>
      </div>

      <div className="w-3/6 m-auto py-6">
        <img src={modal_logo} alt="logo" />
      </div>
      <div className="flex justify-center items-center mb-8">
        <label className="relative font-medium max-md:text-sm max-sm:text-xs text-secondary-white dark:text-gray-300 text-md px-6">
          <input
            type="checkbox"
            className="absolute left-0 w-5 h-5 max-md:w-4 max-md:h4 max-sm:w-3 max-sm:h3 text-blue-100 bg-gray-500 
    border-black-300 rounded focus:ring-blue-500 
    dark:focus:ring-blue-600  
    dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => setChecked(e.target.checked)}
          />
          Не показывать
        </label>
        <button
          className="text-main-black text-sm max-md:px-1 max-sm:px-[2px] max-md:py-[1px] max-sm:py-[.8px] px-2 py-1 rounded bg-secondary-white"
          onClick={saveToLocalStorage}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};
