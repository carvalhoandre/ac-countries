import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import { IPieChart } from "./types";

const PieChart = ({ currencies, languages }: IPieChart) => {
  const options: ApexOptions = {
    labels: [...currencies, ...languages],
  };

  const series = [...currencies.map(() => 1), ...languages.map(() => 1)];

  return <Chart options={options} series={series} type="pie" height={350} />;
};

export default PieChart;
