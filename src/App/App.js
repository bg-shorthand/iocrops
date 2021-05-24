import Main from "Pages/Main/Main";
import StoreProvider from "redux/store";

function App() {
  return (
    <StoreProvider>
      <Main />
    </StoreProvider>
  );
}

export default App;
