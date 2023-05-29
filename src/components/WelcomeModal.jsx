import { useState } from 'react';
import modal_close from '../assets/icons/modal_close.svg';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';

export const WelcomeModal = ({ setModalActive }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handlePhoneInput = (value) => {
    const formattedPhoneNumber = formatPhoneNumber(value);
    setPhone(formattedPhoneNumber);
  };

  function handleNameInput(value) {
    const formattedName = value.replace(/[^a-zA-Z0-9\u0400-\u04FF-"' ]/, '');
    setName(formattedName);
  }

  const saveToSessionStorage = () => {
    setModalActive(false);
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
  };

  const clearLocalStorage = () => {
    setModalActive(false);
    localStorage.removeItem('name');
    localStorage.removeItem('phone');
  };

  return (
    <div className="fixed grid place-items-center z-50 w-full h-full bg-black bg-opacity-75">
      <div className="w-96 max-md:w-80 max-sm:w-72 bg-main-black rounded-lg fixed">
        <div className="relative">
          <button
            className="absolute top-3 right-[12px] w-8 max-md:w-6 max-sm:w-6"
            onClick={clearLocalStorage}
          >
            <img src={modal_close} alt="close icon" />
          </button>
        </div>

        <div className="w-full pt-10 pb-5 text-white">
          <h3 className="text-center mb-5 text-xl max-md:text-xl">
            Добро пожаловать! <br /> Введите ваши данные
          </h3>
          <form className="text-center flex flex-col gap-3">
            <div>
              <input
                className="text-md max-md:text-sm max-sm:text-xs w-10/12 text-black border-[1px] 
          border-white bg-secondary-white placeholder:text-black placeholder:opacity-75 rounded-sm p-1 pl-2"
                type="text"
                name="name"
                placeholder="Имя (не обязательно)"
                value={name}
                onChange={(e) => handleNameInput(e.target.value)}
              />
            </div>
            <div>
              <input
                className="text-md max-md:text-sm max-sm:text-xs w-10/12 text-black border-[1px] 
              border-white bg-secondary-white placeholder:text-black placeholder:opacity-75 mb-[10px] rounded-sm p-1 pl-2"
                type=""
                name="phone"
                placeholder="Номер телефона (не обязательно)"
                value={phone}
                onChange={(e) => handlePhoneInput(e.target.value)}
              />
            </div>
          </form>
        </div>

        <div className="flex justify-center items-center mb-8">
          <button
            className="text-main-black text-sm max-md:px-1 max-sm:px-[2px] max-md:py-[1px] max-sm:py-[.8px] px-2 py-1 cursor-pointer rounded bg-secondary-white"
            onClick={saveToSessionStorage}
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};
