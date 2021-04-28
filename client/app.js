import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/navbar";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <GlobalStyles />
    </div>
  );
};

export default App;
