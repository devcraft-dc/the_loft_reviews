import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { saveTargetInLS } from '../utils/saveTargetInLS';

export const Card = ({ title, cat, image, position, path }) => {
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const goToReviewPage = () => {
    saveTargetInLS(title, cat);
    navigate(path);
  };

  return (
    <div
      ref={ref}
      className="w-full cursor-pointer"
      style={{ contain: 'content' }}
      onClick={() => goToReviewPage()}
    >
      <div className="flex flex-col px-2 py-1 bg-main-black text-secondary-white">
        <h5 className="text-md max-md:text-sm max-sm:text-xs text-ellipsis truncate">
          {title}
        </h5>
        {position && position}
      </div>

      <div className='h-40 max-md:h-36 max-sm:h-28'>
        {inView ? (
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={title}
          />
        ) : (
          <div className="w-full h-full">loading image...</div>
        )}
      </div>
    </div>
  );
};
