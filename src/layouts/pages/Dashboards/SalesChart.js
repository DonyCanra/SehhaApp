import React, { useMemo } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

// Registrasi elemen ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const SalesChart = () => {
  // Gunakan useMemo untuk menghindari pembuatan ulang data di setiap render
  const lineChartData = useMemo(
    () => ({
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Sales 2024",
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
        {
          label: "Sales 2023",
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: "rgba(153, 102, 255, 1)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          fill: true,
        },
      ],
    }),
    []
  );

  const barChartData = useMemo(
    () => ({
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Number of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
          borderWidth: 1,
        },
      ],
    }),
    []
  );

  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Income",
        },
      },
    }),
    []
  );

  return (
    <div className="card" style={{ height: "800px" }}>
      <div className="card-header border-bottom-0">
        <h3 className="card-title">Sales Activity</h3>
      </div>
      <div className="card-body pt-0">
        <div className="chart-wrapper">
          <div style={{ width: "100%", margin: "0 auto" }}>
            <Line key={JSON.stringify(lineChartData)} data={lineChartData} options={options} />
          </div>
          <div style={{ width: "100%", margin: "0 auto" }}>
            <Bar key={JSON.stringify(barChartData)} data={barChartData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
