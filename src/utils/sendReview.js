import { getValueFromLS } from './getValueFromLS';

const BASE_URL = 'https://api.the-loft-reviews.ru/the-loft';

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

  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });
};
