import React from "react";
import { Provider } from "react-redux";
import CryptoInfo from "./components/cryptoinfo";
import store from "./redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CryptoInfo />
      </Provider>
    </div>
  );
}

export default App;
