import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataset } from "data-1.json";
import { createUpdateAction } from "redux/reducers/options";
import createRandomColor from "modules/createRandomColor";
import { Y_AXIS_STANDARD } from "constant/constant";

const Chart = () => {
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();

  const [_options, set_options] = useState(options);

  useEffect(() => {
    const dataNames = Object.keys(dataset[0]).filter((v) => v !== "time");

    const categories = dataset.map((v) => v.time);

    const series = dataNames.map((name) => ({
      name,
      data: dataset.map((data) => data[name]),
      yAxis:
        Math.max(
          ...dataset
            .map((data) => data[name])
            .filter((data) => typeof data === "number")
        ) < Y_AXIS_STANDARD
          ? 0
          : 1,
      color: createRandomColor(),
      checked: true,
    }));

    dispatch(
      createUpdateAction({
        series,
        categories,
      })
    );
  }, []);

  useEffect(() => {
    set_options((prev) => ({
      ...prev,
      series: options.series.filter((item) => item.checked),
      xAxis: { ...options.xAxis },
    }));
  }, [options]);

  return <HighchartsReact highcharts={Highcharts} options={_options} />;
};

export default Chart;
