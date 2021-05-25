import { CompactPicker } from "react-color";
import createAverage from "modules/createAverage";
import createDeviation from "modules/createDeviation";
import createMax from "modules/createMax";
import createMin from "modules/createMin";
import { ReactComponent as UpdateColorIcon } from "assets/highlighter-solid.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUpdateSeriesAction } from "redux/reducers/options";

const TableRow = ({
  name,
  data,
  checked,
  color,
  yAxis,
  onChangeDisplayItem,
  onChageYaxis,
}) => {
  const options = useSelector((state) => state.options);
  const { series } = options;
  const dispatch = useDispatch();

  const [isActiveColor, setIsActiveColor] = useState(false);

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
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: color,
          }}
        ></div>
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
          checked={!yAxis}
          onChange={() => onChageYaxis(name)}
        />
        <label htmlFor={`${name}selectLeft`}>왼쪽</label>
        <input
          type="radio"
          name={`${name}selectYaxis`}
          id={`${name}selectRight`}
          checked={!!yAxis}
          onChange={() => onChageYaxis(name)}
        />
        <label htmlFor={`${name}selectRight`}>오른쪽</label>
      </td>
      <td>
        <button onClick={() => setIsActiveColor(() => true)}>
          <UpdateColorIcon />
        </button>
        {isActiveColor ? (
          <div
            style={{
              position: "absolute",
            }}
          >
            <CompactPicker
              color={color}
              onChangeComplete={(color) => {
                dispatch(
                  createUpdateSeriesAction(
                    series.map((item) =>
                      item.name === name ? { ...item, color: color.hex } : item
                    )
                  )
                );
                setIsActiveColor(() => false);
              }}
            />
          </div>
        ) : null}
      </td>
    </tr>
  );
};

export default TableRow;
