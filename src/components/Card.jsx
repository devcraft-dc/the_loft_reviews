import chat_dots from '../assets/chat_dots.svg';

export const Card = ({ title, image }) => (
  <div className="w-full">
    <div className="flex justify-between items-center px-2 py-1 bg-main-black">
      <h5 className="text-secondary-white text-md max-md:text-sm max-sm:text-xs">
        {title}
      </h5>
      <img
        className="w-6 max-md:w-5 max-sm:w-4"
        src={chat_dots}
        alt="review icon"
      />
    </div>

    <img className="w-full" src={image} alt={title} />
  </div>
);
