import DownloadCsvButton from "Components/DownloadCsvButton";
import Chart from "Containers/Chart";
import Table from "Containers/Table";
import StoreProvider from "redux/store";

function App() {
  return (
    <StoreProvider>
      <Chart />
      <Table className="chart-data-table" />
      <DownloadCsvButton />
    </StoreProvider>
  );
}

export default App;
