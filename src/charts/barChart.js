import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  LabelSeries,
  VerticalBarSeries
} from "react-vis";

import { ChartWrapper, Button } from "../shared/ui";

const BarChart = props => {
  const [index, setIndex] = useState(null);

  const chartWidth = 500;
  const chartHeight = 200;
  const chartDomain = [0, chartHeight];

  const barData = props.data.map((d, i) => ({
    ...d,
    index: i,
    color: i === index ? 1 : 2
  }));

  return (
    <ChartWrapper>
      <XYPlot
        xType="ordinal"
        width={chartWidth}
        height={chartHeight}
        yDomain={chartDomain}
      >
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          onValueMouseOver={(datapoint, event) => {
            setIndex(datapoint.index);
          }}
          onValueMouseOut={() => {
            setIndex(null);
          }}
          data={barData}
        />
        <LabelSeries
          data={props.data.map(obj => {
            return { ...obj, label: obj.y.toString() };
          })}
          labelAnchorX="middle"
          labelAnchorY="text-after-edge"
        />
      </XYPlot>
      <Button onClick={props.onClick}>Update with random data</Button>
    </ChartWrapper>
  );
};

export default BarChart;
