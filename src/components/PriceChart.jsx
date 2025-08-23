import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function PriceChart({ historial }) {
  const data = {
    labels: historial.map(p => p.fecha),
    datasets: [
      {
        label: 'Precio Promedio',
        data: historial.map(p => parseFloat(p.promedio)),
        borderColor: 'rgb(37, 99, 235)',
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
      },
    ],
  };

  return <Line data={data} />;
}
