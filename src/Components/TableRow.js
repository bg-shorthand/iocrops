import { CompactPicker } from "react-color";
import createAverage from "modules/createAverage";
import createDeviation from "modules/createDeviation";
import createMax from "modules/createMax";
import createMin from "modules/createMin";
import { ReactComponent as UpdateColorIcon } from "assets/highlighter-solid.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUpdateAction } from "redux/reducers/series";

const TableRow = ({ name, data, checked, color, yAxis }) => {
  const [isActiveColor, setIsActiveColor] = useState(false);
  const series = useSelector((state) => state.series);
  const dispatch = useDispatch();

  const onChangeDisplayItem = (name) => {
    const payload = series.map((item) => {
      return item.name === name ? { ...item, checked: !item.checked } : item;
    });

    dispatch(createUpdateAction(payload));
  };
  const onChageYaxis = (name) => {
    const payload = series.map((item) =>
      item.name === name ? { ...item, yAxis: item.yAxis ? 0 : 1 } : item
    );

    dispatch(createUpdateAction(payload));
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          id={name}
          checked={checked}
          onChange={() => onChangeDisplayItem(name)}
        />
        <label htmlFor={name}>{name} 표시</label>
      </td>
      <td>
        <span>{color}</span>
      </td>
      <td>{name}</td>
      <td>{createAverage(data)}</td>
      <td>{createDeviation(data)}</td>
      <td>{createMin(data)}</td>
      <td>{createMax(data)}</td>
      <td>
        <input
          type="radio"
          name={`${name}selectYaxis`}
          id={`${name}selectLeft`}
          checked={yAxis === 0}
          onChange={() => onChageYaxis(name)}
        />
        <label htmlFor={`${name}selectLeft`}>왼쪽</label>
        <input
          type="radio"
          name={`${name}selectYaxis`}
          id={`${name}selectRight`}
          checked={yAxis === 1}
          onChange={() => onChageYaxis(name)}
        />
        <label htmlFor={`${name}selectRight`}>오른쪽</label>
      </td>
      <td>
        {isActiveColor ? (
          <CompactPicker
            onChangeComplete={() => setIsActiveColor(() => !isActiveColor)}
          />
        ) : (
          <button onClick={() => setIsActiveColor(() => true)}>
            <UpdateColorIcon />
          </button>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
