import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataset } from "data-1.json";
import { createUpdateAction } from "redux/reducers/options";
import changeDateToSeries from "modules/changeDateToSeries";
import changeDataToCategories from "modules/changeDataToCategories";

const Chart = () => {
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();

  const [activeOptions, setActiveOptions] = useState(options);

  useEffect(() => {
    const series = changeDateToSeries(dataset);
    const categories = changeDataToCategories(dataset);

    dispatch(
      createUpdateAction({
        series,
        categories,
      })
    );
  }, []);

  useEffect(() => {
    const _series = options.series;

    setActiveOptions((prev) => ({
      ...prev,
      series: _series.filter((item) => item.checked && item.inDate),
      xAxis: { ...options.xAxis },
    }));
  }, [options]);

  return <HighchartsReact highcharts={Highcharts} options={activeOptions} />;
};

export default Chart;
