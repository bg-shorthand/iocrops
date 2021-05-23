const createAverage = (array = []) => {
  return array.reduce((acc, cur) => acc + cur, 0) / array.length;
};

export default createAverage;
