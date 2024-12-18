import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import { ILineChart } from "./types";

const LineChart = ({ area, name, population }: ILineChart) => {
  const options: ApexOptions = {
    chart: {
      type: "line",
      height: "auto",
    },
    xaxis: {
      categories: ["População", "Área"],
    },
    stroke: {
      curve: "smooth",
    },
  };

  const series = [
    {
      name: name,
      data: [population, area],
    },
  ];

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default LineChart;
