import chat_dots from '../assets/chat_dots.svg';

export const Card = ({ title, image }) => (
  <div>
    <div>
      <div className=" p-[.5px] grid grid-cols-2 gap-[75px] bg-[#2C2C2C]">
        <h5 className="w-[127px] text-white text-left">{title}</h5>
        <img src={chat_dots} alt="review icon" />
      </div>

      <img className=" w-[130px]" src={image} alt={title} />
    </div>
  </div>
);
