import { useNavigate } from 'react-router-dom';

export const ThanksPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    localStorage.removeItem('category');
    localStorage.removeItem('target');
    navigate('/');
  };

  return (
    <div className="grid items-center gap-10 mt-28 text-center">
      <h1 className="text-4xl max-md:text-3xl text-main-black">
        Спасибо за отзыв!
      </h1>
      <button
        onClick={() => handleGoHome()}
        className="flex justify-center whitespace-nowrap items-center border bg-main-black text-secondary-white h-10 px-3 text-lg m-auto rounded-md"
      >
        Вернуться на главную
      </button>
    </div>
  );
};
