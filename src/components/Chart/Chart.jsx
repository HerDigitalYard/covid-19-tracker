import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { fetchDailyData } from "../../API";

import Styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setdailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setdailyData(await fetchDailyData());
    };
    fetchAPI();
  });

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            label: "Infected",
            data: dailyData.map(({ confirmed }) => confirmed),
            borderColor: "#3333ff",
            fill: true,
          },
          {
            label: "Deaths",
            data: dailyData.map(({ deaths }) => deaths),
            borderColor: 'red',
            fill: true,
            backgroundColor:'rgba(255,0,0,0.5)',
          }
        ]
      }}    
    />
  ) : null;

  return (
    <div className={Styles.container}>
      {lineChart}
    </div>
  );
};

export default Chart;
