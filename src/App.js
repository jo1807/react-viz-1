import React, { useState, useEffect } from "react";
import styled from "styled-components";

import BarChart from "./charts/barChart";
import LineChart from "./charts/lineChart";
import PieChart from "./charts/pieChart";
import {
  getLineChartData,
  getBarChartData,
  getPieChartData
} from "./shared/utils";

const ChartsWrapper = styled.div`
  padding: 2rem;
`;

function App() {
  const [lineChartData, setLineChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    onHandleLineChartData();
    onHandleBarChartData();
    onHandlePieChartData();
  }, []);

  const onHandleLineChartData = () => {
    const lineData = getLineChartData();
    setLineChartData(lineData);
  };

  const onHandleBarChartData = () => {
    const barChartData = getBarChartData();
    setBarChartData(barChartData);
  };

  const onHandlePieChartData = () => {
    const pieChartData = getPieChartData();
    setPieChartData(pieChartData);
  };

  return (
    <ChartsWrapper>
      <LineChart data={lineChartData} onClick={onHandleLineChartData} />
      <BarChart data={barChartData} onClick={onHandleBarChartData} />
      <PieChart data={pieChartData} onClick={onHandlePieChartData} />
    </ChartsWrapper>
  );
}

export default App;
