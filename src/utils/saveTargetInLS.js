export const saveTargetInLS = (target, category) => {
  localStorage.setItem('target', target);
  localStorage.setItem('category', category);
};
