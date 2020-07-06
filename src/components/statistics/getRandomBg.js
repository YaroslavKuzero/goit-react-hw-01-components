const getRandomCol = () => Math.round(Math.random() * 255);
const backgroundColor = () => {
  return `rgb(${getRandomCol()}, ${getRandomCol()}, ${getRandomCol()})`;
};

export default backgroundColor;
