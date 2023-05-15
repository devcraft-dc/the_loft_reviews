export const Card = ({ title, image }) => (
  <div className="w-full">
    <div className="flex justify-between items-center px-2 py-1 bg-main-black">
      <h5 className="text-secondary-white text-md max-md:text-sm max-sm:text-xs text-ellipsis truncate">
        {title}
      </h5>
    </div>

    <img className="w-72 h-40 max-md:h-36 max-md:w-56 max-sm:w-48 max-sm:h-28" src={image} alt={title} />
  </div>
);
