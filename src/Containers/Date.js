import DateInput from "Components/DateInput";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Date = () => {
  const options = useSelector((state) => state.options);
  const { series, xAxis } = options;
  const { categories } = xAxis;

  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  useEffect(() => {
    setStart(() => categories.length && categories[0].slice(0, 9));
    setEnd(
      () => categories.length && categories[categories.length - 1].slice(0, 9)
    );
  }, [categories]);

  console.log(start, end);

  return (
    <>
      <DateInput
        onChange={(e) => {
          console.log(e.target.value);
          setStart(e.target.value);
        }}
        value={start}
      />
      <DateInput onChange={(e) => setEnd(e.target.value)} value={end} />
    </>
  );
};

export default Date;
