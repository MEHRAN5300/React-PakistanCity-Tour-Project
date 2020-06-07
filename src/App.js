import React from "react";
import Navebar from "./Components/Navbar/Navbar";
import TourList from "./Components/TourList";
import "./App.scss";

const App = () => (
  <section>
    <React.Fragment>
      <Navebar />
      <TourList />
    </React.Fragment>
  </section>
);

export default App;
