"use client";

import { addToCart } from "@/utils/cart";   // ✅ IMPORT NECESARIO
import TopBar from "@/components/students/StudentTopBar";
import "./catalogo.css";

const cursos = [
  {
    id: 1,
    titulo: "Máster en Eficiencia Energética",
    precio: 29,
    imagen: "/img/curso1.jpg",
  },
  {
    id: 2,
    titulo: "Curso de Seguridad Industrial",
    precio: 29,
    imagen: "/img/curso2.jpg",
  },
  {
    id: 3,
    titulo: "Energías Renovables",
    precio: 29,
    imagen: "/img/curso3.jpg",
  },
];

export default function CatalogoPage() {
  return (
    <div className="catalogo-page">
      <TopBar />

      <div className="catalogo-container">
        <h1 className="catalogo-title">Catálogo de Cursos</h1>

        <div className="catalogo-grid">
          {cursos.map((curso) => (
            <div key={curso.id} className="curso-card">
              <img src={curso.imagen} alt={curso.titulo} />

              <h3>{curso.titulo}</h3>
              <p className="precio">{curso.precio}€</p>

              <button
                className="btn-comprar"
                onClick={() => {
                  addToCart(curso); // ✅ AHORA FUNCIONA
                  window.location.href = "/dashboard/estudiante/cesta";
                }}
              >
                Añadir a la cesta
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
