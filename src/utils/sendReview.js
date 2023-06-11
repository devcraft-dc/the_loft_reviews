import { getValueFromLS } from './getValueFromLS';

export const sendReview = (text) => {
  const name = getValueFromLS('name') ?? 'не указано';
  const phone = getValueFromLS('phone') ?? 'не указано';
  const category = getValueFromLS('category');
  const target = getValueFromLS('target');

  const review = {
    name,
    phone,
    category,
    target,
    reviewText: text,
  };

  fetch('https://reviews-tg-proxy.onrender.com/the-loft', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });
};
