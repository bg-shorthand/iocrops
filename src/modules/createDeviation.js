import createMax from "./createMax";
import createMin from "./createMin";

const createDeviation = (array = []) => {
  return Math.floor((createMax(array) - createMin(array)) * 100) / 100;
};

export default createDeviation;
