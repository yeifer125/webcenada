import React, { useEffect, useState } from "react";

export default function SearchBar({ busqueda, setBusqueda }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 🔹 Manejo de scroll para ocultar/mostrar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false); // Scroll down → ocultar
      } else {
        setVisible(true); // Scroll up → mostrar
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0 -translate-y-20"
      }`}
    >
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar producto..."
        className="px-4 py-2 rounded-xl shadow-md w-80 md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
