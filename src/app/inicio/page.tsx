"use client";

import "./inicio.css";

export default function InicioPage() {
  return (
    <div className="inicio-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>FORMACIÓN TÉCNICA ESPECIALIZADA EN INGENIERÍA</h1>
          <a href="/dashboard/estudiante/catalogo" className="btn-hero">
            VER CATÁLOGO
          </a>
        </div>
      </section>

      {/* CURSOS DESTACADOS */}
      <section className="destacados">
        <h2 className="destacados-title">CURSOS DESTACADOS</h2>

        <div className="destacados-grid">
          <div className="curso-card">
            <img src="/img/curso1.jpg" alt="Curso" />
            <h3>SEGURIDAD INDUSTRIAL AVANZADA</h3>
            <p className="precio">$29.00</p>
            <a href="/dashboard/estudiante/catalogo" className="btn-card">
              MATRICULARME
            </a>
          </div>

          <div className="curso-card">
            <img src="/img/curso2.jpg" alt="Curso" />
            <h3>EFICIENCIA ENERGÉTICA EN PLANTAS</h3>
            <p className="precio">$29.00</p>
            <a href="/dashboard/estudiante/catalogo" className="btn-card">
              MATRICULARME
            </a>
          </div>

          <div className="curso-card">
            <img src="/img/curso3.jpg" alt="Curso" />
            <h3>EFICIENCIA ENERGÉTICA EN PLANTAS</h3>
            <p className="precio">$29.00</p>
            <a href="/dashboard/estudiante/catalogo" className="btn-card">
              MATRICULARME
            </a>
          </div>

          <div className="curso-card">
            <img src="/img/curso4.jpg" alt="Curso" />
            <h3>EFICIENCIA ENERGÉTICA EN PLANTAS</h3>
            <p className="precio">$29.00</p>
            <a href="/dashboard/estudiante/catalogo" className="btn-card">
              MATRICULARME
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
