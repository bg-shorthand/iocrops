const createAverage = (array = []) => {
  return (
    Math.floor(
      (array.reduce((acc, cur) => (isNaN(cur) ? acc : acc + cur), 0) /
        array.length) *
        100
    ) / 100
  );
};

export default createAverage;
