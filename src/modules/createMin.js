const createMin = (array = []) => {
  return (
    Math.floor(Math.min(...array.filter((v) => typeof v === "number")) * 100) /
    100
  );
};

export default createMin;
