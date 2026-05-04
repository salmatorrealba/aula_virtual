"use client";

import AreaTopBar from "@/components/students/StudentTopBar";
import "./mi-area.css";

export default function MiAreaPage() {
  return (
    <>
      <AreaTopBar />

    <div className="student-area">
  <div className="area-content">

    <h1 className="area-title">Mi Área (Samara)</h1>
    <p className="area-subtitle">Aquí puedes ver tus cursos completados y tu progreso general.</p>

    <h2 className="entregados-title">Cursos Entregados</h2>

    <div className="entregado-card">
      <div className="entregado-info">
        <strong>Seguridad Industrial Avanzada</strong>
        <p>Entregado el: 12/04/2026</p>
      </div>
      <div className="entregado-icon">✔</div>
    </div>

    <div className="entregado-card">
      <div className="entregado-info">
        <strong>Eficiencia Energética en Plantas</strong>
        <p>Entregado el: 20/04/2026</p>
      </div>
      <div className="entregado-icon">✔</div>
    </div>
<h3 className="progreso-title">Cursos por entregar</h3>
    <div className="progreso-card">
      <div className="progreso-info">
        <strong>Gestión de Residuos Industriales</strong>
        <p>Fecha de entrega: 30/04/2026</p>
        <button className="entregar-btn">Entregar Curso</button>
      </div>
      <div className="progreso-icon">⏳</div>
    </div>
  </div>
</div>

    </>
  );
}
