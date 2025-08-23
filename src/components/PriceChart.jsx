import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PriceChart({ historial }) {
  // historial = array de objetos [{fecha, promedio}, ...] ordenados por fecha ascendente

  if (!historial || historial.length === 0) return null;

  return (
    <div className="w-full h-64 md:h-96 bg-white p-4 rounded-xl shadow-lg my-4">
      <h3 className="text-lg font-bold mb-2">Histórico de precios</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={historial}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fecha" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip formatter={(value) => value.toFixed(2)} />
          <Line
            type="monotone"
            dataKey="promedio"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
