import Chart from "react-apexcharts";
import { IPropsLineChart } from "./types";
import { formatNumber } from "../../../../helpers/numbers";
import { fontSize, fontWeight, grey } from "../../../../styles/theme";

export const LineChart = ({ countrie }: IPropsLineChart): JSX.Element => {
  const state = {
    series: [
      {
        name: countrie?.name?.official || "País",
        data: [
          {
            x: "População",
            y: formatNumber(countrie.population) || 0,
          },
          {
            x: "Área",
            y: formatNumber(countrie?.area) || 0,
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
              fontSize: fontSize.default,
              fontWeight: fontWeight.regular,
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
