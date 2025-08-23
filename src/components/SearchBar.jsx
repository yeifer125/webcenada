import React, { useState, useEffect } from 'react';

export default function SearchBar({ busqueda, setBusqueda }) {
  const [mostrar, setMostrar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setMostrar(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full bg-white shadow p-4 transition-transform ${mostrar ? 'translate-y-0' : '-translate-y-20'}`}>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        className="w-full p-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
