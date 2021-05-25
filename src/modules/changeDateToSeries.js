import { Y_AXIS_STANDARD } from "constant/constant";
import createRandomColor from "./createRandomColor";

const changeDateToSeries = (data) => {
  const dataNames = Object.keys(data[0]).filter((v) => v !== "time");

  const series = dataNames.map((name) => ({
    name,
    data: data.map((data) => data[name]),
    yAxis:
      Math.max(
        ...data
          .map((data) => data[name])
          .filter((data) => typeof data === "number")
      ) < Y_AXIS_STANDARD
        ? 0
        : 1,
    color: createRandomColor(),
    checked: true,
    inDate: true,
  }));

  return series;
};

export default changeDateToSeries;
