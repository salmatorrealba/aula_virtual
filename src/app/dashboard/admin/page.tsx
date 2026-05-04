"use client";

import React from "react";
import "./admin.css";
import dynamic from "next/dynamic";

const IngresosChart = dynamic(() => import("./IngresosChart"), {
  ssr: false,
});

import {
  FaBookOpen,
  FaDollarSign,
  FaFolderOpen,
  FaUserFriends,
} from "react-icons/fa";

export default function AdminDashboard() {
  return (
    <div className="dashboard-layout">

      {/* COLUMNA IZQUIERDA */}
      <div className="dashboard-left">

        {/* TÍTULO */}
        <h1 className="dashboard-title">Dashboard de Administrador</h1>

        {/* TARJETAS */}
        <div className="dashboard-cards">

          <DashboardCard
            icon={<FaDollarSign className="card-icon" />}
            title="INGRESOS TOTALES (€)"
            value="€0"
            subtext="Totales del mes"
          />

          <DashboardCard
            icon={<FaUserFriends className="card-icon" />}
            title="USUARIOS ACTIVOS"
            value="0"
            subtext="Usuarios registrados"
          />

          <DashboardCard
            icon={<FaFolderOpen className="card-icon" />}
            title="PROYECTOS ENTREGADOS"
            value="0"
            subtext="Durante este mes"
          />

          <DashboardCard
            icon={<FaBookOpen className="card-icon" />}
            title="CURSOS PUBLICADOS"
            value="0"
            subtext="Cursos disponibles"
          />

        </div>
      </div>

      {/* COLUMNA DERECHA — GRÁFICA */}
      <div className="dashboard-chart">
        <h2>Tendencia de Ingresos Mensuales</h2>
        <IngresosChart />
      </div>

    </div>
  );
}

/* -------------------------------------- */
/* COMPONENTE TARJETA */
/* -------------------------------------- */

type DashboardCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  subtext: string;
  miniChart?: string; // opcional
};

function DashboardCard({ icon, title, value, subtext, miniChart }: DashboardCardProps) {
  return (
    <div className="card">
      <div className="card-header">
        {icon}
        <div className="card-content">
          <h3>{title}</h3>
          <p className="value">{value}</p>
          <p className="subtext">{subtext}</p>
        </div>
      </div>

      {miniChart && (
        <img src={miniChart} alt="mini chart" className="card-mini-chart" />
      )}
    </div>
  );
}
