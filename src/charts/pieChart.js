import React from "react";
import { RadialChart } from "react-vis";

import { ChartWrapper, Button } from "../shared/ui";

const PieChart = props => {
  return (
    <ChartWrapper>
      <RadialChart
        data={props.data}
        width={300}
        height={300}
        showLabels={true}
      />
      <Button onClick={props.onClick}>Update with random data</Button>
    </ChartWrapper>
  );
};

export default PieChart;
