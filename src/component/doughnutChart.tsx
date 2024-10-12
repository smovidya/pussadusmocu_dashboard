// PieChart.tsx
import { ChartData } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// กำหนดประเภทของ Props ให้ถูกต้อง
interface PieChartProps {
  data: ChartData<"doughnut", number[], string>; // <ชนิดแผนภูมิ, ข้อมูลใน datasets, ประเภท label>
}

function DoughnutChart({ data }: PieChartProps) {
  return (
    <div className="chart-container " >
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Doughnut
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
    </div>
  );
}

export default DoughnutChart;
