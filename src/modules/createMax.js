const createMax = (array = []) => {
  return (
    Math.floor(Math.max(...array.filter((v) => typeof v === "number")) * 100) /
    100
  );
};

export default createMax;
