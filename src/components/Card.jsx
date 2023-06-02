import { useInView } from 'react-intersection-observer';

export const Card = ({ title, image, position }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="w-full">
      <div className="flex flex-col px-2 py-1 bg-main-black text-secondary-white">
        <h5 className=" text-md max-md:text-sm max-sm:text-xs text-ellipsis truncate">
          {title}
        </h5>
        {position && position}
      </div>

      {inView ? (
        <img
          className="w-72 h-40 max-md:h-36 max-md:w-56 max-sm:w-48 max-sm:h-28"
          src={image}
          alt={title}
        />
      ) : (
        <div className="w-72 h-40 max-md:h-36 max-md:w-56 max-sm:w-48 max-sm:h-28">
          loading image...
        </div>
      )}
    </div>
  );
};
