import { ChartConfiguration } from "chart.js";

export const CHART_CONFIGURATION: ChartConfiguration = {
  type: "bar",
  data: {
    labels: ["Jan 12", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [],
  },
  options: {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
    },
  },
};
