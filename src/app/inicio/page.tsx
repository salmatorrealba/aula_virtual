"use client";

import "./inicio.css";
import ConfigTopBar from "@/components/custom/ConfigTopBar";
import "@/components/custom/ConfigTopBar.css";

export default function InicioPage() {

  const addToCart = (curso) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(curso);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "/dashboard/estudiante/cesta";
  };

  return (
    <>
      <ConfigTopBar />

      <div className="inicio-page">

        {/* HERO */}
        <section className="hero">
          <div className="hero-card">
            <h1>FORMACIÓN ESPECIALIZADA CON MASINGENIERIA</h1>
            <a href="/dashboard/estudiante/catalogo" className="btn-hero">
              VER CATÁLOGO
            </a>
          </div>
        </section>

        {/* CURSOS DESTACADOS */}
        <section className="destacados">
          <h2 className="destacados-title">CURSOS DESTACADOS</h2>

          <div className="destacados-grid">

            {/* CURSO 1 */}
            <div className="curso-card">
              <img src="/img/curso1.jpg" alt="Curso" />
              <h3>SEGURIDAD INDUSTRIAL AVANZADA</h3>
              <p className="precio">$29.00</p>
              <button
                className="btn-card"
                onClick={() =>
                  addToCart({
                    id: 1,
                    titulo: "SEGURIDAD INDUSTRIAL AVANZADA",
                    precio: 29,
                    imagen: "/img/curso1.jpg",
                  })
                }
              >
                MATRICULARME
              </button>
            </div>

            {/* CURSO 2 */}
            <div className="curso-card">
              <img src="/img/curso2.jpg" alt="Curso" />
              <h3>EFICIENCIA ENERGÉTICA EN PLANTAS</h3>
              <p className="precio">$29.00</p>
              <button
                className="btn-card"
                onClick={() =>
                  addToCart({
                    id: 2,
                    titulo: "EFICIENCIA ENERGÉTICA EN PLANTAS",
                    precio: 29,
                    imagen: "/img/curso2.jpg",
                  })
                }
              >
                MATRICULARME
              </button>
            </div>

            {/* CURSO 3 */}
            <div className="curso-card">
              <img src="/img/curso3.jpg" alt="Curso" />
              <h3>EFICIENCIA ENERGÉTICA EN PLANTAS</h3>
              <p className="precio">$29.00</p>
              <button
                className="btn-card"
                onClick={() =>
                  addToCart({
                    id: 3,
                    titulo: "EFICIENCIA ENERGÉTICA EN PLANTAS",
                    precio: 29,
                    imagen: "/img/curso3.jpg",
                  })
                }
              >
                MATRICULARME
              </button>
            </div>

            {/* CURSO 4 */}
            <div className="curso-card">
              <img src="/img/curso4.jpg" alt="Curso" />
              <h3>EFICIENCIA ENERGÉTICA EN PLANTAS</h3>
              <p className="precio">$29.00</p>
              <button
                className="btn-card"
                onClick={() =>
                  addToCart({
                    id: 4,
                    titulo: "EFICIENCIA ENERGÉTICA EN PLANTAS",
                    precio: 29,
                    imagen: "/img/curso4.jpg",
                  })
                }
              >
                MATRICULARME
              </button>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
