import { useState } from 'react';
import food from '../assets/food.json';
import staff from '../assets/staff.json';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import sendIcon from '../assets/icons/send.svg';
import backIcon from '../assets/icons/back.svg';
import { sendReview } from '../utils/sendReview';

export const ReviewPage = () => {
  const [reviewText, setReviewText] = useState('');
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isStaffPage = pathname.includes('staff');
  const back = isStaffPage ? '/staff' : '/';

  const { title, image } = isStaffPage
    ? staff.find((item) => item.id === +id)
    : food.find((item) => item.id === +id);

  const handleGoBack = () => {
    localStorage.removeItem('target');
    localStorage.removeItem('category');
    navigate(back);
  };

  const handleSendReview = (e) => {
    e.preventDefault();
    if (reviewText !== '') {
      sendReview(reviewText);
      setReviewText('');
      navigate('/thanks');
    }
  };

  return (
    <>
      <div className="fixed top-0 w-[500px] max-lg:w-full">
        <header className="bg-main-black flex justify-between items-center border-b-[3px] text-secondary-white py-[29.5px] max-md:py-[25.5px] max-sm:py-[21.5px] px-5">
          <button onClick={() => handleGoBack()}>
            <img
              className="w-8 mx-auto max-md:w-7 max-sm:w-6"
              src={backIcon}
              alt="go back"
            />
          </button>
          <span className="text-xl max-md:text-lg max-sm:text-sm w-3/5 text-center overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </span>
          <button onClick={(e) => handleSendReview(e)}>
            <img
              className="w-8 mx-auto max-md:w-7 max-sm:w-6"
              src={sendIcon}
              alt="send review"
            />
          </button>
        </header>
      </div>
      <div className="flex flex-col w-4/5 m-auto mt-32 max-md:mt-28 max-sm:mt-24">
        <div className="overflow-hidden rounded-t-md">
          <img
            className="flex-shrink-0 min-w-full min-h-full"
            src={image}
            alt=""
          />
        </div>
        <textarea
          className="outline-none bg-main-black p-4 h-44 text-xl max-md:text-lg max-sm:text-sm text-secondary-white rounded-b-md"
          placeholder="Введите ваш отзыв..."
          onChange={(e) => setReviewText(e.target.value)}
          value={reviewText}
        ></textarea>
      </div>
    </>
  );
};
