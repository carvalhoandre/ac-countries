import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import { IAreaChart } from "./types";

const AreaChart = ({ area, name, population }: IAreaChart) => {
  const options: ApexOptions = {
    chart: {
      type: "area",
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

  return <Chart options={options} series={series} type="area" height={350} />;
};

export default AreaChart;
