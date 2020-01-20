import React, { useState, useEffect } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  LabelSeries,
  VerticalBarSeries
} from "react-vis";

import { ChartWrapper, Button, SubTitle } from "../shared/ui";
import { getUpdatedNumber } from "../shared/utils";

const BarChart = props => {
  const [index, setIndex] = useState(null);
  const [updateNumber, setUpdatenumber] = useState(0);

  useEffect(() => {
    if (props.data.length) {
      const updatedNumber = updateNumber + 1;
      setUpdatenumber(updatedNumber);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data]);

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
      <SubTitle>Bar chart updated: {getUpdatedNumber(updateNumber)}</SubTitle>
    </ChartWrapper>
  );
};

export default BarChart;
