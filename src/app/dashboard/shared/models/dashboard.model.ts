import { ChartConfiguration } from "chart.js";

export interface DashboardPageState {
  chartConfiguration: ChartConfiguration;
  lastMonth: string;
}
