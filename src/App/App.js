import Chart from "../Components/Chart";
import StoreProvider from "../redux/store";

function App() {
  return (
    <StoreProvider>
      <h1>iocrops</h1>
      <Chart />
    </StoreProvider>
  );
}

export default App;
