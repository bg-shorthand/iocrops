const TableHead = ({ children }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>체크박스</td>
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
