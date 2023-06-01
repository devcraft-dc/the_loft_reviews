import { useState } from 'react';
import { createTemplate } from '../utils/createTemplate';
import { getValueFromLS } from '../utils/getValueFromLS';

const token = '6254094428:AAHLn_cZXnDOfoYncvguxarwXWsxzcpuqpI';
const chatId = '-1001923326203';

export const OtherReviews = () => {
  const [reviewText, setReviewText] = useState('');

  const name = getValueFromLS('name');
  const phone = getValueFromLS('phone');
  const category = getValueFromLS('category');
  const target = getValueFromLS('target');

  const template = createTemplate({
    name,
    phone,
    reviewText,
    category,
    target,
  });

  const encoded = encodeURIComponent(template);

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encoded}`;

  const sendReview = (e) => {
    if (reviewText !== '') {
      e.preventDefault();
      void fetch(url);
      setReviewText('');
    }
    e.preventDefault();
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
        <button onClick={(e) => sendReview(e)}>Отправить</button>
      </form>
    </div>
  );
};
