import Chart from "react-apexcharts";
import { IPropsLineChart } from "./types";
import { formatNumber } from "../../../../helpers/numbers";
import { fontSize, fontWeight, grey } from "../../../../styles/theme";
import { ApexOptions } from "apexcharts"; // Import ApexOptions type

const LineChart = ({ countrie }: IPropsLineChart): JSX.Element => {
  const state: { series: any[]; options: ApexOptions } = {
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
      colors: [grey.darkest],
      chart: {
        type: "bar",
        height: "auto",
        width: "100%",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      xaxis: {
        type: "category",
        labels: {
          style: {
            fontSize: fontSize.default,
            fontWeight: fontWeight.regular,
            colors: [grey.darkest],
          },
        },
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              width: "100%",
              height: "auto",
            },
            plotOptions: {
              bar: {
                columnWidth: "60%",
              },
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: fontSize.small,
                },
              },
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
            plotOptions: {
              bar: {
                columnWidth: "70%",
              },
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: fontSize.small,
                },
              },
            },
          },
        },
      ],
    },
  };

  return (
    <Chart
      options={state.options}
      series={state.series}
      height="100%"
      width="100%"
      type="bar"
    />
  );
};

export default LineChart;
