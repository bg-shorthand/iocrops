import TableHead from "Components/TableHead";
import TableRow from "Components/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { createUpdateSeriesAction } from "redux/reducers/options";

const Table = ({ className }) => {
  const options = useSelector((state) => state.options);
  const { series } = options;
  const dispatch = useDispatch();

  const onChangeDisplayItem = (name) => {
    const payload = series.map((item) =>
      item.name === name ? { ...item, checked: !item.checked } : item
    );
    dispatch(createUpdateSeriesAction(payload));
  };
  const onChageYaxis = (name) => {
    const payload = series.map((item) =>
      item.name === name ? { ...item, yAxis: item.yAxis ? 0 : 1 } : item
    );
    dispatch(createUpdateSeriesAction(payload));
  };

  return (
    <table className={className}>
      <TableHead />
      <tbody>
        {series.map(({ name, data, checked, color, yAxis }) => (
          <TableRow
            key={name}
            name={name}
            data={data}
            checked={checked}
            color={color}
            yAxis={yAxis}
            onChangeDisplayItem={onChangeDisplayItem}
            onChageYaxis={onChageYaxis}
          ></TableRow>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
