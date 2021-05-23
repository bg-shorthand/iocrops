import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataset } from "data-1.json";
import { createUpdateAction } from "redux/reducers/series";
import createRandomColor from "modules/createRandomColor";

const Chart = () => {
  const series = useSelector((state) => state.series);
  const dispatch = useDispatch();

  const categories = dataset.map((v) => v.time);

  useEffect(() => {
    const dataNames = Object.keys(dataset[0]).filter((v) => v !== "time");

    const payload = dataNames.map((name) => ({
      name,
      data: dataset.map((data) => data[name]),
      yAxis:
        Math.max(
          ...dataset
            .map((data) => data[name])
            .filter((data) => typeof data === "number")
        ) < 10
          ? 0
          : 1,
      color: createRandomColor(),
      checked: true,
    }));

    dispatch(createUpdateAction(payload));
  }, []);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        title: {
          text: "",
        },
        xAxis: {
          categories: categories,
        },
        yAxis: [
          {},
          {
            opposite: true,
          },
        ],
        series: series.filter((item) => item.checked),
      }}
    />
  );
};

export default Chart;
