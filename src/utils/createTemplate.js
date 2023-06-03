export const createTemplate = ({
  name,
  phone,
  reviewText,
  category,
  target,
}) => {
  const food = `- Категория: Еда
- Наименование: ${target !== null ? target : ''}
- Текст: ${reviewText}`;

  const staff = `- Категория: Персонал
- Имя: ${target !== null ? target : ''}
- Текст: ${reviewText}`;

  const other = `- Категория: Другое
- Текст: ${reviewText}`;

  const whichCategory =
    category === 'food' ? food : category === 'other' ? other : staff;

  return `Отправитель: 
- Имя: ${name ? name : 'не указано'}
- Номер телефона: ${phone ? phone : 'не указано'}
  
Отзыв:
${whichCategory}`;
};
