import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  MarkSeries
} from "react-vis";
import "../../node_modules/react-vis/dist/style.css"; // css styling from the react-vis node module

import { ChartWrapper, Button } from "../shared/ui";

const LineChart = props => {
  return (
    <ChartWrapper>
      <XYPlot height={400} width={400}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={props.data} />
        <MarkSeries data={props.data} stroke="white" />
      </XYPlot>
      <Button onClick={props.onClick}>Update with random data</Button>
    </ChartWrapper>
  );
};

export default LineChart;
