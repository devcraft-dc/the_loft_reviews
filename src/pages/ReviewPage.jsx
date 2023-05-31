import { useState } from 'react';
import food from '../assets/food.json';
import staff from '../assets/staff.json';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { createTemplate } from '../utils/createTemplate';
import { getValueFromLS } from '../utils/getValueFromLS';
import sendIcon from '../assets/icons/send.svg';
import backIcon from '../assets/icons/back.svg';

const token = '6254094428:AAHLn_cZXnDOfoYncvguxarwXWsxzcpuqpI';
const chatId = '-1001923326203';

const name = getValueFromLS('name');
const phone = getValueFromLS('phone');
const category = getValueFromLS('category');
const target = getValueFromLS('target');

export const ReviewPage = () => {
  const [reviewText, setReviewText] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isStaffPage = pathname.includes('staff');
  const back = isStaffPage ? '/staff' : '/';

  const { image, title } = isStaffPage ? staff[id] : food[id];

  const template = createTemplate({
    name,
    phone,
    reviewText,
    category,
    target,
  });

  const encoded = encodeURIComponent(template);

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encoded}`;

  const sendReview = (e, url) => {
    e.preventDefault();
    if (reviewText !== '') {
      void fetch(url);
      navigate(back);
      setReviewText('');
    }
  };

  return (
    <>
      <div className="fixed top-0 w-[500px] max-lg:w-full">
        <header className="bg-main-black flex justify-between items-center border-b-[3px] text-secondary-white py-7 max-md:py-6 max-sm:py-5 px-5">
          <Link to={back}>
            <img
              className="w-8 mx-auto max-md:w-7 max-sm:w-6"
              src={backIcon}
              alt="go back"
            />
          </Link>
          <span className="text-xl max-md:text-lg max-sm:text-sm w-3/5 text-center overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </span>
          <button onClick={(e) => sendReview(e, url)}>
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
