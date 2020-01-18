import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  LabelSeries,
  VerticalBarSeries,
  MarkSeries
} from "react-vis";

import { ChartWrapper } from "../shared";

const BarChart = props => {
  const data = [
    { y: 100, x: "Jan" },
    { y: 112, x: "Feb" },
    { y: 230, x: "Mar" },
    { y: 268, x: "Apr" },
    { y: 300, x: "May" },
    { y: 310, x: "Jun" },
    { y: 315, x: "Jul" },
    { y: 340, x: "Aug" },
    { y: 388, x: "Sep" },
    { y: 404, x: "Oct" },
    { y: 442, x: "Nov" },
    { y: 447, x: "Dec" }
  ];

  const chartWidth = 500;
  const chartHeight = 300;
  const chartDomain = [0, chartHeight + 200];
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
        <VerticalBarSeries data={data} />
        <MarkSeries animation={{ damping: 9, stiffness: 300 }} data={data} />
        <LabelSeries
          data={data.map(obj => {
            return { ...obj, label: obj.y.toString() };
          })}
          labelAnchorX="middle"
          labelAnchorY="text-after-edge"
        />
      </XYPlot>
    </ChartWrapper>
  );
};

export default BarChart;
