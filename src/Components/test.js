import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect } from "react";

import dataset from "../data-1.json";

const Test = () => {
  const data = dataset.dataset;
  // data.length = 10;

  let keys = Object.keys(data[0]);
  keys = keys.filter((v) => v !== "time");

  const series = [];
  keys.forEach((key) => {
    const value = data.map((obj) => obj[key]);

    series.push({
      name: key,
      data: value,
      yAxis: Math.max(...value) < 100 ? 0 : 1,
    });
  });

  const categories = data.map((v) => v.time);
  console.log(categories);

  console.log(series);

  useEffect(() => {}, []);

  return (
    <HighchartsReact
      // highcharts={Highcharts}
      options={{
        chart: {},
        title: {
          text: "Fruit Consumption",
        },
        xAxis: {
          categories: categories,
        },
        yAxis: [
          {
            min: 0,
            max: 100,
            tickInterval: 10,
          },
          {
            opposite: true,
            min: 0,
            max: 2000,
            tickInterval: 500,
          },
        ],
        series: series,
      }}
    />
  );
};

export default Test;
