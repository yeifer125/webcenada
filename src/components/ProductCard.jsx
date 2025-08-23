import React from "react";

export default function ProductCard({ producto }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 m-2 hover:shadow-2xl transition-shadow duration-300 w-full md:w-96">
      <h2 className="text-lg font-bold mb-2">{producto.producto}</h2>
      <p className="text-sm text-gray-500 mb-1">
        <span className="font-semibold">Unidad:</span> {producto.unidad}
      </p>
      <p className="text-sm text-gray-500 mb-1">
        <span className="font-semibold">Mayorista:</span> {producto.mayorista}
      </p>
      <div className="grid grid-cols-2 gap-2 mt-2 text-gray-700">
        <p><span className="font-semibold">Mínimo:</span> {producto.minimo}</p>
        <p><span className="font-semibold">Máximo:</span> {producto.maximo}</p>
        <p><span className="font-semibold">Moda:</span> {producto.moda}</p>
        <p><span className="font-semibold">Promedio:</span> {producto.promedio}</p>
      </div>
      <p className="text-xs text-gray-400 mt-2">Fecha: {producto.fecha}</p>
    </div>
  );
}
