import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import ProductCard from "./components/ProductCard.jsx";
import PriceChart from "./components/PriceChart.jsx";

const API_URL = "https://apicenada.onrender.com/precios";

function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // 🚀 Cargar productos desde la API
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al cargar datos:", err));
  }, []);

  // Filtrar productos según búsqueda
  const productosFiltrados = productos.filter((p) =>
    p.producto.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Precios PIMA</h1>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productosFiltrados.map((p, index) => (
          <ProductCard
            key={index}
            producto={p}
            onClick={() => setProductoSeleccionado(p.producto)}
          />
        ))}
      </div>

      {productoSeleccionado && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Historial de {productoSeleccionado}
          </h2>
          <PriceChart
            datos={productos.filter((p) => p.producto === productoSeleccionado)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
