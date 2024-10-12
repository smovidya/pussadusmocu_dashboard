// ChartPie.tsx
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../lib/testData";
import DoughnutChart from "./doughnutChart";

Chart.register(CategoryScale);

export default function ChartPie() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year.toString()), 
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#EAB308", //ADS
          "#AB55F7", // HOME
          "#6366f1", //OFFICE
          "#EF4444", //MUSICAL
          "#F97316", //MEDICAL_SCI
          "#06B6D4", //BUILDING
          "#EC4899", //CLOTHING
          "#84cc16", //MEDICAL_SCI
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  return (
      <DoughnutChart data={chartData} />
  );
}
