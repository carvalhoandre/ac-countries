import Chart from "react-apexcharts";
import { IPropsLineChart } from "./types";

 const LineChart = ({ countrie }: IPropsLineChart): JSX.Element => {
  const state = {
    series: [
      {
        name: "$",
        data: [
          {
            x: "Populacao",
            y: countrie?.population || 0,
          },
          {
            x: "Área",
            y: countrie?.area || 0,
          },
        ],
      },
    ],
    options: {
      colors: "#000",
      chart: {
        height: 350,
        type: "bar",
        zoom: {
          enabled: false,
        },
      },

      options: {
        chart: {
          type: "bar",
          height: 380,
        },
        xaxis: {
          type: "category",
          group: {
            style: {
              fontSize: "12px",
              fontWeight: 700,
              fontColor: "#000",
            },
          },
        },
      },
    },
  };

  return (
    <Chart
      options={{ ...state }}
      series={state.series}
      height="240"
      type="bar"
    />
  );
};

export default LineChart;