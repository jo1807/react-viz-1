import React from "react";
import { RadialChart } from "react-vis";

import { ChartWrapper } from "../shared";

const PieChart = props => {
  const dataClicks = [
    { label: "Views", angle: 94 },
    { label: "Clicks", angle: 3 }
  ];

  return (
    <ChartWrapper>
      <RadialChart
        data={dataClicks}
        width={300}
        height={300}
        showLabels={true}
      />
    </ChartWrapper>
  );
};

export default PieChart;
