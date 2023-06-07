import { useEffect, useState } from 'react';
import { sendReview } from '../utils/sendReview';
import { useNavigate } from 'react-router-dom';

export const OtherReviews = () => {
  const [reviewText, setReviewText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('category', 'other');
  }, []);

  const handleSendReview = (e) => {
    e.preventDefault();
    if (reviewText !== '') {
      sendReview(reviewText);
      setReviewText('');
      navigate('/thanks');
    }
  };

  return (
    <div className="flex flex-col w-5/6 m-auto mt-32 max-md:mt-28 max-sm:mt-24">
      <h1 className="text-center text-2xl max-md:text-xl mb-8">
        Ваши жалобы и предложения:
      </h1>
      <form className="flex flex-col">
        <textarea
          className="outline-none bg-main-black p-4 min-h-[75px] h-52 text-xl max-md:text-lg max-sm:text-sm max-md:h-40 text-secondary-white rounded-md"
          placeholder="Введите текст..."
          onChange={(e) => setReviewText(e.target.value)}
          value={reviewText}
        ></textarea>
        <button
          onClick={(e) => handleSendReview(e)}
          className="bg-main-black text-secondary-white w-2/6 text-xl max-md:text-lg max-sm:text-sm mx-auto mt-5 rounded-md p-1"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};
