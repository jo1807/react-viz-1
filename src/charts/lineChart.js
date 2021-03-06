import React, { useState, useEffect } from "react";
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

import { ChartWrapper, Button, SubTitle } from "../shared/ui";
import { getUpdatedNumber } from "../shared/utils";

const LineChart = props => {
  const [updateNumber, setUpdatenumber] = useState(0);

  useEffect(() => {
    if (props.data.length) {
      const updatedNumber = updateNumber + 1;
      setUpdatenumber(updatedNumber);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data]);

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
      <SubTitle>Line chart updated: {getUpdatedNumber(updateNumber)}</SubTitle>
    </ChartWrapper>
  );
};

export default LineChart;
