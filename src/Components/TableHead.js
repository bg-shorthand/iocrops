import { useDispatch, useSelector } from "react-redux";
import { createUpdateAction } from "redux/reducers/series";

const TableHead = ({ children }) => {
  const series = useSelector((state) => state.series);
  const dispatch = useDispatch();

  const onChangeDisplayAll = (e) => {
    console.log(e.target);

    const payload = series.map((item) => ({
      ...item,
      checked: e.target.checked ? true : false,
    }));

    dispatch(createUpdateAction(payload));
  };

  return (
    <table>
      <thead>
        <tr>
          <td>
            <input
              type="checkbox"
              id="checkAll"
              checked={
                series.filter((item) => item.checked).length === series.length
              }
              onChange={onChangeDisplayAll}
            />
            <label htmlFor="checkAll">전체 표시</label>
          </td>
          <td>색상</td>
          <td>항목</td>
          <td>평균값</td>
          <td>편차</td>
          <td>최소값</td>
          <td>최대값</td>
          <td>Y축 선택</td>
          <td>색상 수정</td>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default TableHead;
