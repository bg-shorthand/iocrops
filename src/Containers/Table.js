import TableHead from "Components/TableHead";
import TableRow from "Components/TableRow";
import { useSelector } from "react-redux";

const Table = () => {
  const series = useSelector((state) => state.series);

  return (
    <TableHead>
      {series.map(({ name, data }) => (
        <TableRow name={name} data={data}></TableRow>
      ))}
    </TableHead>
  );
};

export default Table;
