import food_icon from "../assets/food.svg";
import staff_icon from "../assets/staff.svg";
import userinfo_icon from "../assets/userinfo.svg";

export const Header = () => {
  return (
    <header className="bg-[#2C2C2C] flex justify-between h-20 text-white px-5">
      <img className="w-12" src={staff_icon} alt="logo" />

      <div className="flex align-middle w-40 justify-around">
        <button className="flex flex-col justify-center align-middle gap-2">
          <img className="w-9 mx-auto" src={food_icon} alt="food" />
          <span className="text-sm">Еда</span>
        </button>
        <button className="flex flex-col justify-center align-middle gap-2">
          <img className="w-9 mx-auto" src={staff_icon} alt="staff" />
          <span className="text-sm">Персонал</span>
        </button>
      </div>

      <button className="flex flex-col justify-center align-middle gap-2">
        <img className="w-9 mx-auto" src={userinfo_icon} alt="userinfo" />
        <span className="text-sm">Данные</span>
      </button>
    </header>
  );
};
