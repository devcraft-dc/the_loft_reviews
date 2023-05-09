export const IconButton = ({ icon, title, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={isActive ? 'border-b-4' : 'border-b-4 border-main-black'}
  >
    <img
      className="w-8 mx-auto max-md:w-7 max-sm:w-6"
      src={icon}
      alt={title ? title : 'icon'}
    />
    {title !== '' && (
      <span className="text-sm max-md:text-xs max-sm:text-[0.65rem]">
        {title}
      </span>
    )}
  </button>
);
