"use client";

import CourseSidebar from "@/components/students/CourseSidebar";
import "./curso.css";

export default function CursoPage() {
  return (
    <div className="curso-layout">
      <CourseSidebar />

      <div className="curso-content">
        <h2 className="curso-title">ANÁLISIS DE EFICIENCIA TÉRMICA</h2>

        <div className="curso-main">
          <video
            className="curso-video"
            controls
            src="/videos/curso-demo.mp4"
          />

          <img
            src="/img/diagrama-termico.png"
            className="curso-diagrama"
            alt="Diagrama térmico"
          />
        </div>

        <div className="curso-tabs">
          <button className="tab active">RECURSOS</button>
          <button className="tab">FORO</button>
          <button className="tab">NOTAS</button>
        </div>

        <div className="curso-recursos">
          <div className="recurso-item">
            <img src="/icons/pdf.png" className="pdf-icon" />
            <span>Guía Técnica de Campo</span>
          </div>

          <div className="recurso-item">
            <img src="/icons/pdf.png" className="pdf-icon" />
            <span>Manual de Operación</span>
          </div>

          <div className="recurso-item">
            <img src="/icons/pdf.png" className="pdf-icon" />
            <span>Checklist de Inspección</span>
          </div>
        </div>
      </div>
    </div>
  );
}
