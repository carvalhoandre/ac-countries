import Chart from "react-apexcharts";
import { IPropsLineChart } from "./types";
import { grey } from "../../../../styles/theme";

 const LineChart = ({ countrie }: IPropsLineChart): JSX.Element => {
  const state = {
    series: [
      {
        name: countrie?.name?.official || 'País',
        data: [
          {
            x: "População",
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
      colors: grey.darkest,
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
              fontColor: grey.darkest,
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