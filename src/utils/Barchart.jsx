import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartData = {
    labels: ["January", "February", "March", "april", "may"],
    datasets: [
      {
        label: "Total traffic",
        data: [1200, 300, 800, 1100, 540],
        backgroundColor: "#9061F9",
        borderColor: "#76A9FA",
        borderWidth: 1,
      },
      {
        label: "Total Earnings",
        data: [800, 500, 700,550, 320],
        backgroundColor: "#76A9FA",
        borderColor: "cyan",
        borderWidth: 1,
        borderDash: [5, 5],
      },
    ],
  };
const Barchart = () => {
    const options={};
  return (
    <div className="w-full">
        <Bar options={options} data={BarChartData}/>
    </div>
  )
}

export default Barchart