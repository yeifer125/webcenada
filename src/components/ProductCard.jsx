import React from 'react';

export default function ProductCard({ producto, onSelect }) {
  return (
    <div
      className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer transition"
      onClick={onSelect}
    >
      <h3 className="font-bold">{producto.producto}</h3>
      <p>Unidad: {producto.unidad}</p>
      <p>Mayorista: {producto.mayorista}</p>
      <p>Último precio promedio: {producto.promedio}</p>
      <p>Fecha: {producto.fecha}</p>
    </div>
  );
}
