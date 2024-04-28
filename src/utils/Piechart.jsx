import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as chartjs, Tooltip, Legend, ArcElement } from "chart.js";

chartjs.register(ArcElement, Tooltip, Legend);

const PieChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      lable: "Pie Chart",
      data: [10, 20, 30, 40, 50, 60, 70],
      backgroundColor: [
        "#9061F9",
        "#76A9FA",
        "#9061F9",
        "#76A9FA",
        "#9061F9",
        "#76A9FA",
        "#9061F9",
      ],
      hoverOffset: 4,
    },
  ],
};
const Piechart = () => {
  const option = {};
  return (
    <div className="w-[300px]">
      <Pie options={option} data={PieChartData} />
    </div>
  );
};

export default Piechart;
