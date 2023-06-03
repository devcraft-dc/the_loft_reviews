import { useState } from 'react';
import { sendReview } from '../utils/sendReview';

export const OtherReviews = () => {
  const [reviewText, setReviewText] = useState('');

  const handleSendReview = (e) => {
    e.preventDefault();
    if (reviewText !== '') {
      sendReview(reviewText);
      setReviewText('');
    }
  };

  return (
    <div className="flex flex-col w-4/5 m-auto mt-32 max-md:mt-28 max-sm:mt-24">
      <h1 className="text-center text-xl mb-3">Ваши жалобы и предложения</h1>
      <form className="flex flex-col">
        <textarea
          className="outline-none bg-main-black p-4 h-44 text-xl max-md:text-lg max-sm:text-sm text-secondary-white rounded-b-md"
          placeholder="Введите текст..."
          onChange={(e) => setReviewText(e.target.value)}
          value={reviewText}
        ></textarea>
        <button onClick={(e) => handleSendReview(e)}>Отправить</button>
      </form>
    </div>
  );
};
