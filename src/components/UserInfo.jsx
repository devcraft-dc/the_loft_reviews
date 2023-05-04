import close_button from '../assets/close_button.svg';

export const UserInfo = () => (
  <div className="w-[100%] border-b-[2px] border-black mt-[2px] rounded-b-[20px]">
    <div className="w-[100%] flex justify-between p-3.5 mb-[10px] bg-main-black text-secondary-white">
      <h3 className="w-[70%]">Данные рецензента</h3>
      <button className="">
        <img src={close_button} alt="" />
      </button>
    </div>
    <form className="text-center flex flex-col gap-3">
      <div>
        <input
          className="text-lg max-sm:text-base  w-[90%] text-secondary-white border-[1px] 
          border-black bg-main-black placeholder:text-secondary-white rounded-md p-2"
          type="text"
          name="name"
          placeholder="Имя (не обязательно)"
        />
      </div>
      <div>
        <input
          className="text-lg max-sm:text-base w-[90%] text-secondary-white border-[1px] 
          border-black bg-main-black placeholder:text-secondary-white  mb-[10px] rounded-md p-2"
          type=""
          name="phone"
          placeholder="Номер телефона (не обязательно)"
        />
      </div>
    </form>
    <div className="w-[90%] flex justify-end max-md:justify-center gap-4 mb-[10px] m-auto">
      <button className="text-lg max-sm:text-sm border bg-main-black text-secondary-white border-black rounded-md py-[5px] px-[10px]">
        Отмена
      </button>
      <button className="text-lg max-sm:text-sm border bg-main-black text-secondary-white border-black rounded-md py-[5px] px-[15px]">
        Отправить
      </button>
    </div>
  </div>
);
