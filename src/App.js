import React from "react";
import "./App.css";
import styled from "styled-components";

import BarChart from "./charts/barChart";
import LineChart from "./charts/lineChart";
import PieChart from "./charts/pieChart";

const ChartsWrapper = styled.div`
  padding: 2rem;
`;

function App() {
  //api data
  //update on data math.random
  return (
    <ChartsWrapper>
      <LineChart />
      <BarChart />
      <PieChart />
    </ChartsWrapper>
  );
}

export default App;
