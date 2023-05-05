import { useState } from 'react';
import close_button from '../assets/close_button.svg';

export const UserInfo = ({ setShowUserinfo }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="w-full border-b-[2px] border-black mt-[2px] rounded-b-[20px]">
      <div className="w-full flex justify-between p-3.5 mb-[10px] bg-main-black text-secondary-white">
        <h3 className="w-[70%] max-sm:text-sm">Данные рецензента</h3>
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
            className="text-md max-md:text-sm max-sm:text-xs w-[90%] text-secondary-white border-[1px] 
          border-black bg-main-black placeholder:text-secondary-white placeholder:opacity-50 rounded-md p-2"
            type="text"
            name="name"
            placeholder="Имя (не обязательно)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="text-md max-md:text-sm max-sm:text-xs w-[90%] text-secondary-white border-[1px] 
          border-black bg-main-black placeholder:text-secondary-white placeholder:opacity-50 mb-[10px] rounded-md p-2"
            type=""
            name="phone"
            placeholder="Номер телефона (не обязательно)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </form>
      <div className="w-[90%] flex justify-end max-md:justify-center gap-2 mb-[10px] m-auto">
        <button
          onClick={() => setShowUserinfo(false)}
          className="text-md max-md:text-sm max-sm:text-xs border bg-main-black text-secondary-white border-black rounded-md py-[5px] px-[10px]"
        >
          Отмена
        </button>
        <button className="text-md max-md:text-sm max-sm:text-xs border bg-main-black text-secondary-white border-black rounded-md py-[5px] px-[15px]">
          Отправить
        </button>
      </div>
    </div>
  );
};
