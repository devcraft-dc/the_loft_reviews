import nothingFound from '../assets/icons/nothing-found.svg';

export const NothingFound = () => (
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <img
      className="w-44 max-md:w-36 max-sm:w-28 mx-auto"
      src={nothingFound}
      alt="search icon"
    />
    <p className="font-semibold text-main-black text-center mt-6 text-lg max-md:text-sm w-96 max-md:w-64">
      По вашему запросу ничего не найдено
    </p>
  </div>
);
