import { IPropsLineChart } from "../LineChart/types";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const PieChart = ({ countrie }: IPropsLineChart): JSX.Element => {
  const state: { series: number[]; options: ApexOptions } = {
    series: [
      countrie.population,
      countrie.area,
      Object.keys(countrie.languages).length,
    ],
    options: {
      chart: {
        type: "pie",
        height: "auto",
      },
      labels: ["População", "Área", "Número de Línguas"],
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              width: "100%",
              height: "auto",
            },
          },
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              width: "100%",
              height: "auto",
            },
          },
        },
      ],
    },
  };

  return <Chart options={state.options} series={state.series} type="pie" />;
};

export default PieChart;
