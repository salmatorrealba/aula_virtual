"use client";

import { useEffect, useState } from "react";
import TopBar from "@/components/students/StudentTopBar";
import { getCart, removeFromCart } from "@/utils/cart";
import "./cesta.css";

export default function CestaPage() {
  const [cesta, setCesta] = useState([]);

  useEffect(() => {
    setCesta(getCart());
  }, []);

  function eliminar(id) {
    removeFromCart(id);
    setCesta(getCart());
  }

  const subtotal = cesta.reduce((acc, c) => acc + c.precio, 0);

  return (
    <div className="cesta-page">
      <TopBar />

      <h1 className="cesta-title">Cesta de compra</h1>

      <div className="cesta-layout">
        {/* LISTA DE CURSOS */}
        <div className="cesta-lista">
          {cesta.length === 0 && (
            <p className="cesta-vacia">Tu cesta está vacía.</p>
          )}

          {cesta.map((curso) => (
            <div key={curso.id} className="cesta-item">
              <img src={curso.imagen} alt={curso.titulo} />

              <div className="cesta-info">
                <h3>{curso.titulo}</h3>
                <p className="precio">{curso.precio}€</p>
              </div>

              <button className="btn-eliminar" onClick={() => eliminar(curso.id)}>
                🗑
              </button>
            </div>
          ))}
        </div>

        {/* RESUMEN DEL PEDIDO */}
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

          <button className="btn-pago">Proceder al pago</button>
        </div>
      </div>
    </div>
  );
}
