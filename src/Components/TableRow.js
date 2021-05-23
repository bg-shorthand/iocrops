import createAverage from "modules/createAverage";
import createDeviation from "modules/createDeviation";
import createMax from "modules/createMax";
import createMin from "modules/createMin";

const TableRow = ({ name, data }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" id={name} />
        <label htmlFor={name}>{name} 표시</label>
      </td>
      <td>
        <span>색상</span>
      </td>
      <td>{name}</td>
      <td>{createAverage(data)}</td>
      <td>{createDeviation(data)}</td>
      <td>{createMin(data)}</td>
      <td>{createMax(data)}</td>
      <td>
        <input type="radio" name={`${name}selectYaxis`} />
        <input type="radio" name={`${name}selectYaxis`} />
      </td>
      <td>
        <span>컬러피커</span>
      </td>
    </tr>
  );
};

export default TableRow;
