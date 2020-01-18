import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries
} from "react-vis";
import "../../node_modules/react-vis/dist/style.css"; // css styling from the react-vis node module

import { ChartWrapper } from "../shared";

const LineChart = props => {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 }
  ];

  return (
    <ChartWrapper>
      <XYPlot height={400} width={400}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} />
      </XYPlot>
    </ChartWrapper>
  );
};

export default LineChart;
