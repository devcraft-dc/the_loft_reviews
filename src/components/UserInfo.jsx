import { useState } from 'react';
import close_button from '../assets/close_button.svg';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';

export const UserInfo = ({ setShowUserinfo }) => {
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

  return (
    <div className="w-full border-y-[3px] border-t-secondary-white border-b-main-black rounded-b-3xl bg-secondary-white">
      <div className="w-full flex justify-between p-3.5 mb-[10px] bg-main-black text-secondary-white">
        <h3 className="text-lg max-md:text-base max-sm:text-sm">
          Данные рецензента
        </h3>
        <button onClick={() => setShowUserinfo(false)}>
          <img
            className="w-7 max-md:w-6 max-sm:w-5"
            src={close_button}
            alt=""
          />
        </button>
      </div>
      <form className="text-center flex flex-col gap-3">
        <div>
          <input
            className="text-md max-md:text-sm max-sm:text-xs w-11/12 text-secondary-white border-[1px] 
          border-black bg-main-black placeholder:text-secondary-white placeholder:opacity-50 rounded-md p-2"
            type="text"
            name="name"
            placeholder="Имя (не обязательно)"
            value={name}
            onChange={(e) => handleNameInput(e.target.value)}
          />
        </div>
        <div>
          <input
            className="text-md max-md:text-sm max-sm:text-xs w-11/12 text-secondary-white border-[1px] 
          border-black bg-main-black placeholder:text-secondary-white placeholder:opacity-50 mb-[10px] rounded-md p-2"
            type=""
            name="phone"
            placeholder="Номер телефона (не обязательно)"
            value={phone}
            onChange={(e) => handlePhoneInput(e.target.value)}
          />
        </div>
      </form>
      <div className="w-11/12 flex justify-end max-md:justify-center gap-2 mb-[10px] m-auto">
        <button
          onClick={() => setShowUserinfo(false)}
          className="text-md max-md:text-sm max-sm:text-xs border bg-main-black text-secondary-white rounded-md py-[5px] px-[10px]"
        >
          Отмена
        </button>
        <button className="text-md max-md:text-sm max-sm:text-xs border bg-main-black text-secondary-white rounded-md py-[5px] px-[15px]">
          Сохранить
        </button>
      </div>
    </div>
  );
};
