import React, { useState, useEffect } from "react";
import { RadialChart } from "react-vis";

import { ChartWrapper, Button, SubTitle } from "../shared/ui";
import { getUpdatedNumber } from "../shared/utils";

const PieChart = props => {
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
      <RadialChart
        data={props.data}
        width={300}
        height={300}
        showLabels={true}
      />
      <Button onClick={props.onClick}>Update with random data</Button>
      <SubTitle>Pie chart updated: {getUpdatedNumber(updateNumber)}</SubTitle>
    </ChartWrapper>
  );
};

export default PieChart;
