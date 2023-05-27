import { useState } from 'react';
import staff from '../assets/staff.json';
import { useParams } from 'react-router-dom';
import { createTemplate } from '../utils/createTemplate';
import { getValueFromLS } from '../utils/getValueFromLS';

const token = '6254094428:AAHLn_cZXnDOfoYncvguxarwXWsxzcpuqpI';
const chatId = '-1001923326203';

export const StaffReview = () => {
  const [reviewText, setReviewText] = useState('');
  const { id } = useParams();
  const { image, title } = staff[id];

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
    e.preventDefault();
    void fetch(url);
    setReviewText('');
  };

  return (
    <div className="flex">
      <div>
        <img src={image} alt="" />
        <span>{title}</span>
      </div>
      <form className="flex flex-col">
        <textarea
          onChange={(e) => setReviewText(e.target.value)}
          value={reviewText}
        ></textarea>
        <button onClick={(e) => sendReview(e)}>Отправить</button>
      </form>
    </div>
  );
};
