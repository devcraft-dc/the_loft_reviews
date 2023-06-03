import { createTemplate } from './createTemplate';
import { getValueFromLS } from './getValueFromLS';

export function sendReview(reviewText) {
  const token = '6254094428:AAHLn_cZXnDOfoYncvguxarwXWsxzcpuqpI';
  const chatId = '-1001923326203';

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

  void fetch(url);
}
