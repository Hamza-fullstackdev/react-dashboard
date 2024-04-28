import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Total traffic",
      data: [65, 59, 80, 41, 56, 55, 90],
      backgroundColor: "#9061F9",
      borderColor: "#76A9FA",
      borderWidth: 1,
    },
    {
      label: "Total Earnings",
      data: [60, 50, 70, 71, 46, 45, 80],
      backgroundColor: "blue",
      borderColor: "cyan",
      borderWidth: 1,
      borderDash: [5, 5],
    },
  ],
};

const Linechart = () => {
  const option = {};
  return (
    <div className='flex flex-row w-full justify-center text-white p-4'>
      <Line option={option} data={LineChartData}/>
    </div>
  );
};

export default Linechart;
