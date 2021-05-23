const { default: createAverage } = require("./createAverage");

const createDeviation = (array = []) => {
  const average = createAverage(array);
  const variance = array.reduce(
    (acc, cur) => (cur - average) * (cur - average) + acc,
    0
  );
  return Math.floor(Math.sqrt(variance));
};

export default createDeviation;
