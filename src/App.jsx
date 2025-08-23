import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import PriceChart from './components/PriceChart';

function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    axios.get('https://apicenada.onrender.com/precios')
      .then(res => setProductos(res.data))
      .catch(err => console.error(err));
  }, []);

  const productosFiltrados = productos.filter(p =>
    p.producto.toLowerCase().includes(busqueda.toLowerCase())
  );

  const historialSeleccionado = productosFiltrados
    .filter(p => p.producto === seleccionado)
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {productosFiltrados.map(p => (
          <ProductCard
            key={p.producto + p.fecha}
            producto={p}
            onSelect={() => setSeleccionado(p.producto)}
          />
        ))}
      </div>
      {seleccionado && historialSeleccionado.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Historial de precios: {seleccionado}</h2>
          <PriceChart historial={historialSeleccionado} />
        </div>
      )}
    </div>
  );
}

export default App;
