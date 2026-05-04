"use client";

import Link from "next/link";
import "./student-dark-sidebar.css";

export default function StudentSidebar() {
  return (
    <aside className="student-sidebar">
      <div className="sidebar-title">ESTUDIANTE</div>

      <nav className="sidebar-nav">
        <Link href="/dashboard/estudiante" className="sidebar-link">🏠 Inicio</Link>
        <Link href="/dashboard/estudiante/mis-cursos" className="sidebar-link">📚 Mis Cursos</Link>
        <Link href="/dashboard/estudiante/mi-area" className="sidebar-link">🗂 Mi Área</Link>
        <Link href="/dashboard/estudiante/mi-perfil" className="sidebar-link">👤 Mi Perfil</Link>
        <Link href="/dashboard/estudiante/catalogo" className="sidebar-link">Catálogo</Link>
        <Link href="/dashboard/estudiante/recursos" className="sidebar-link">Recursos</Link>
        <Link href="/auth/inicio" className="sidebar-link logout">Cerrar sesión</Link>
      </nav>
    </aside>
  );
}
