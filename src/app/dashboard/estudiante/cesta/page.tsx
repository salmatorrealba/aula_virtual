"use client";

import ConfigTopBar from "@/components/custom/ConfigTopBar";
import "@/components/custom/ConfigTopBar.css";
import { useEffect, useState } from "react";
import "./cesta.css";

export default function CestaPage() {
  const [cesta, setCesta] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCesta(cart);
  }, []);

  const eliminarCurso = (id) => {
    const nuevaCesta = cesta.filter((curso) => curso.id !== id);
    setCesta(nuevaCesta);
    localStorage.setItem("cart", JSON.stringify(nuevaCesta));
  };

  const subtotal = cesta.reduce((acc, curso) => acc + curso.precio, 0);

  return (
    <>
      {/* 🔶 TOPBAR AÑADIDO AQUÍ */}
      <ConfigTopBar />

      <div className="cesta-page">
        <h1 className="cesta-title">Cesta de compra</h1>

        <div className="cesta-layout">

          {/* LISTA */}
          <div className="cesta-lista">
            {cesta.map((curso) => (
              <div key={curso.id} className="cesta-item">
                <img src={curso.imagen} alt={curso.titulo} />

                <div className="cesta-info">
                  <h3>{curso.titulo}</h3>
                  <p className="precio">{curso.precio}€</p>
                </div>

                <button
                  className="btn-eliminar"
                  onClick={() => eliminarCurso(curso.id)}
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          {/* RESUMEN */}
          <div className="cesta-resumen">
            <h2>Resumen del pedido</h2>

            <div className="resumen-linea">
              <span>Subtotal</span>
              <span>{subtotal}€</span>
            </div>

            <div className="resumen-linea">
              <span>Impuestos</span>
              <span>0€</span>
            </div>

            <div className="resumen-total">
              <span>Total</span>
              <span>{subtotal}€</span>
            </div>

            <a href="/dashboard/estudiante/pago" className="btn-proceder-pago">
              Proceder al pago
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
