"use client";

import DashboardTopBar from "@/components/students/DashboardTopBar";
import "./dashboard.css";
import { useRouter } from "next/navigation";

export default function DashboardEstudiante() {
  const router = useRouter();

  return (
    <div className="dashboard-layout">

      <main className="dashboard-main">
        <DashboardTopBar userName="Estudiante" />

        <h1 className="dashboard-title">Bienvenido a tu Dashboard</h1>

        <div className="dashboard-cards">
          <div className="card">
            <h3>📚Cursos activos</h3>
            <p className="metric">4</p>
            <button className="view-btn" onClick={() => router.push("/dashboard/estudiante/mis-cursos")}>
              Ver mis cursos
            </button>
          </div>

          <div className="card">
            <h3>📝Tareas pendientes</h3>
            <p className="metric">3</p>
            <button className="view-btn" onClick={() => router.push("/dashboard/estudiante/mis-cursos")}>
              Revisar tareas
            </button>
          </div>

          <div className="card">
            <h3>📊Promedio general</h3>
            <p className="metric">8.7</p>
          </div>

          <div className="card">
            <h3>⏱ Horas de estudio</h3>
            <p className="metric">24.5</p>
            <button className="view-btn" onClick={() => router.push("/dashboard/estudiante/mis-cursos")}>
              Ver progreso
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
