import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DownloadCsvButton = () => {
  const series = useSelector((state) => state.series);
  const [csv, setCsv] = useState("");

  useEffect(() => {
    const csvString = series
      .map(({ name, data }) => [name, ...data.map((num) => num + "")])
      .join("\n");
    setCsv(csvString);
  }, [series]);

  return (
    <a
      href={`data:text/csv;charset=utf-8, ${encodeURIComponent(csv)}`}
      download="chart-data.csv"
      target="_blank"
      rel="noreferrer"
    >
      DOWNLOAD
    </a>
  );
};

export default DownloadCsvButton;
