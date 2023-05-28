export const getValueFromLS = (value) =>
  localStorage.getItem(value) !== null ? localStorage.getItem(value) : null;