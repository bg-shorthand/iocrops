import Chart from "Containers/Chart";
import Table from "Containers/Table";
import StoreProvider from "redux/store";

function App() {
  return (
    <StoreProvider>
      <Chart />
      <Table />
    </StoreProvider>
  );
}

export default App;
