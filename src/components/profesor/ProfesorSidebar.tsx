"use client";

import Link from "next/link";
import styles from "./ProfesorSidebar.module.css";

import {
  LayoutDashboard,
  BookOpen,
  Users,
  CheckSquare,
  Settings,
} from "lucide-react";

export default function ProfesorSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>AulaPro</div>

      <nav className={styles.menu}>
        <Link href="/dashboard/profesor" className={styles.item}>
          <LayoutDashboard size={20} />
          <span>Panel</span>
        </Link>

        <Link href="/dashboard/profesor/cursos" className={styles.item}>
          <BookOpen size={20} />
          <span>Mis Cursos</span>
        </Link>

        <Link href="/dashboard/profesor/tutorias" className={styles.item}>
          <Users size={20} />
          <span>Mis Tutorías</span>
        </Link>

        <Link href="/dashboard/profesor/entregas" className={styles.item}>
          <CheckSquare size={20} />
          <span>Calificaciones</span>
        </Link>

        <Link href="/dashboard/profesor/configuracion" className={styles.item}>
          <Settings size={20} />
          <span>Configuración</span>
        </Link>
      </nav>
    </aside>
  );
}
