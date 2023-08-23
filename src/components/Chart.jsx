import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement);

const Chart = ({ label1, figure1, color1, label2, figure2, color2, label3, figure3, color3 }) => {
  const data = {
    labels: [label1, label2, label3],
    datasets: [
      {
        data: [figure1, figure2, figure3],
        backgroundColor: [color1, color2, color3],
        hoverBackgroundColor: [ `${color1}63`, `${color2}63`, `${color3}63`],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, 
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Chart;
