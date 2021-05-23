import TableHead from "Components/TableHead";
import TableRow from "Components/TableRow";
import { useSelector } from "react-redux";

const Table = () => {
  const series = useSelector((state) => state.series);

  return (
    <TableHead>
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
    </TableHead>
  );
};

export default Table;
