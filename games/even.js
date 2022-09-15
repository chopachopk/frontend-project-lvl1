const MAX_NUMBER = 1000;

export default () => {
  const number = Math.floor(Math.random() * MAX_NUMBER);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return { question: number, correctAnswer };
};
