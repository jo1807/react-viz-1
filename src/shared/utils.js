const getRandomNumber1To100 = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const pieChartData = [
  { label: "Apples", angle: null },
  { label: "Oranges", angle: null },
  { label: "Pears", angle: null }
];

const barChartData = [
  { y: null, x: "Jan" },
  { y: null, x: "Feb" },
  { y: null, x: "Mar" },
  { y: null, x: "Apr" },
  { y: null, x: "May" },
  { y: null, x: "Jun" },
  { y: null, x: "Jul" },
  { y: null, x: "Aug" },
  { y: null, x: "Sep" },
  { y: null, x: "Oct" },
  { y: null, x: "Nov" },
  { y: null, x: "Dec" }
];

export const getLineChartData = () => {
  let lineChartData = [...Array(3).keys()];
  return lineChartData.map(() => {
    return {
      x: getRandomNumber1To100(),
      y: getRandomNumber1To100()
    };
  });
};

export const getBarChartData = () => {
  return barChartData.map(data => {
    return {
      x: data.x,
      y: getRandomNumber1To100()
    };
  });
};

export const getPieChartData = () => {
  return pieChartData.map(data => {
    return {
      label: data.label,
      angle: getRandomNumber1To100()
    };
  });
};

export const getUpdatedNumber = updatedNumber =>
  updatedNumber === 1 ? `${updatedNumber} time` : `${updatedNumber} times`;
