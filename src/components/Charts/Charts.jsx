import { memo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import styled from "./Charts.module.css";

export const Charts = memo(({ chartData, options }) => {
  return (
    <div className={styled.container}>
      {chartData.map((data, index) => (
        <div className={styled.grid_item} key={index}>
          <div className={styled.title}>
            <span>Acciones</span>
            <h2>{data.datasets[0].name}</h2>
            <p>{data.datasets[0].initials.toUpperCase()}</p>
          </div>
          <div className={styled.canvas}>
            <Line options={options} data={data} />
          </div>
          <div className={styled.numbers}>
            <strong>
              <p>{data.datasets[0].total}</p>
            </strong>
            <span
              style={{
                color: data.datasets[0].percentage > 0 ? "#00a000" : "#ff4040",
              }}
            >
              % {data.datasets[0].percentage}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
});
