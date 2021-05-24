import TableHead from "Components/TableHead";
import TableRow from "Components/TableRow";
import { useSelector } from "react-redux";

const Table = ({ className }) => {
  const series = useSelector((state) => state.series);

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
          ></TableRow>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
