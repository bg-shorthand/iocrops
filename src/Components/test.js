import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect } from "react";

const Test = () => {
  return (
    <HighchartsReact
      // highcharts={Highcharts}
      options={{
        chart: {
          renderTo: "container",
          type: "column",
        },
        title: {
          text: "Fruit Consumption",
        },
        xAxis: {
          title: {
            text: "Fruit Number",
          },
          tickInterval: 1,
        },
        yAxis: {
          title: {
            text: "Fruit eaten",
          },
          tickInterval: 1,
        },
        series: [
          {
            name: "Jane",
            data: [1, 0, 4],
          },
          {
            name: "John",
            data: [5, 7, 3],
          },
          {
            name: "Han",
            data: [1, 2, 3],
          },
        ],
      }}
    />
  );
};

export default Test;
