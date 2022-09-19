// eslint-disable-next-line import/prefer-default-export
export const getRandomNumberInLimit = (limit, start = 0) => (
  start + Math.floor(Math.random() * limit)
);
