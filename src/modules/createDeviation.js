import createAverage from "./createAverage";

const createDeviation = (array = []) => {
  const average = createAverage(array);
  const variance =
    array.reduce(
      (acc, cur) =>
        isNaN(cur) ? acc : (cur - average) * (cur - average) + acc,
      0
    ) / array.filter((v) => typeof v === "number").length;

  return Math.floor(Math.sqrt(variance) * 100) / 100;
};

export default createDeviation;
