
// Chart.jsx
import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';

function Chart() {
  const barChartRef = useRef(null);
  const areaChartRef = useRef(null);
  const barChartInstanceRef = useRef(null);
  const areaChartInstanceRef = useRef(null);

  useEffect(() => {
    const xBarValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yBarValues = [55, 49, 44, 24, 15];
    const barColors = ["red", "green", "blue", "orange", "brown"];

    const xAreaValues = ["Mar 1", "Mar 3", "Mar 5", "Mar 7", "Mar 9", "Mar 11", "Mar 13"];
    const yAreaValues = [10000, 30000, 20000, 30000, 25000, 27000, 35000];

    if (barChartInstanceRef.current) barChartInstanceRef.current.destroy();
    if (barChartRef.current) {
      barChartInstanceRef.current = new ChartJS(barChartRef.current, {
        type: "bar",
        data: {
          labels: xBarValues,
          datasets: [{ backgroundColor: barColors, data: yBarValues }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: { display: true, text: "World Wine Production 2018" }
          }
        }
      });
    }

    if (areaChartInstanceRef.current) areaChartInstanceRef.current.destroy();
    if (areaChartRef.current) {
      areaChartInstanceRef.current = new ChartJS(areaChartRef.current, {
        type: "line",
        data: {
          labels: xAreaValues,
          datasets: [{
            label: "Visitors",
            data: yAreaValues,
            fill: true,
            borderColor: "rgba(0, 123, 255, 1)",
            backgroundColor: "rgba(0, 123, 255, 0.2)",
            tension: 0.3,
            pointRadius: 4
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: { display: true, text: "Area Chart Example" }
          },
          scales: { y: { beginAtZero: true } }
        }
      });
    }

    return () => {
      if (barChartInstanceRef.current) barChartInstanceRef.current.destroy();
      if (areaChartInstanceRef.current) areaChartInstanceRef.current.destroy();
    };
  }, []);

  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-chart-area mr-1"></i> Area Chart Example
          </div>
          <div className="card-body">
            <canvas ref={areaChartRef} width="100%" height="40"></canvas>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-chart-bar mr-1"></i> Bar Chart Example
          </div>
          <div className="card-body">
            <canvas ref={barChartRef} width="100%" height="40"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;