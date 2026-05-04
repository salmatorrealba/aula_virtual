"use client";

import React from "react";
import "./profesor.css";
import dynamic from "next/dynamic";

import ProfesorSidebar from "@/components/profesor/ProfesorSidebar";
import ProfesorTopBar from "@/components/profesor/ProfesorTopBar";

const ProgresoChart = dynamic(() => import("./ProgresoChart"), {
  ssr: false,
});

import {
  FaBookOpen,
  FaUserFriends,
  FaClipboardCheck,
  FaStar,
} from "react-icons/fa";

export default function ProfesorDashboard() {
  return (
    <div className="profesor-page">
      {/* SIDEBAR FIJO */}
      <ProfesorSidebar />

      {/* ZONA PRINCIPAL */}
      <div className="profesor-main">
        <ProfesorTopBar />

        <div className="dashboard-layout">
          {/* COLUMNA IZQUIERDA */}
          <div className="dashboard-left">
            <h1 className="dashboard-title">Panel del Profesor</h1>

            <div className="dashboard-cards">
              <DashboardCard
                icon={<FaBookOpen className="card-icon" />}
                title="CURSOS IMPARTIDOS"
                value="5"
                subtext="Cursos activos"
              />

              <DashboardCard
                icon={<FaUserFriends className="card-icon" />}
                title="ALUMNOS ACTIVOS"
                value="17"
                subtext="Estudiantes totales"
              />

              <DashboardCard
                icon={<FaClipboardCheck className="card-icon" />}
                title="ENTREGAS PENDIENTES"
                value="0"
                subtext="Por corregir"
              />

              <DashboardCard
                icon={<FaStar className="card-icon" />}
                title="VALORACIÓN MEDIA"
                value="4.8"
                subtext="Promedio general"
              />
            </div>
          </div>

          {/* COLUMNA DERECHA — GRÁFICA */}
          <div className="dashboard-chart">
            <h2>Progreso de Alumnos por Curso</h2>
            <ProgresoChart />
          </div>
        </div>
      </div>
    </div>
  );
}

type DashboardCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  subtext: string;
};

function DashboardCard({ icon, title, value, subtext }: DashboardCardProps) {
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
    </div>
  );
}
