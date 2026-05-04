"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ProfesorTopBar.module.css";

import {
  LayoutDashboard,
  User,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export default function ProfesorTopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.topbar}>
      <nav className={styles.menu}>
        <Link href="/dashboard/profesor" className={styles.item}>PANELES</Link>
        <Link href="/dashboard/profesor/proyectos" className={styles.item}>PROYECTOS</Link>
        <Link href="/dashboard/cuenta" className={styles.item}>CUENTA</Link>

        {/* PROFESOR + DESPLEGABLE */}
        <div
          className={styles.dropdownWrapper}
          onClick={() => setOpen(!open)}
        >
          <span className={`${styles.item} ${styles.active}`}>PROFESOR</span>

          {open && (
            <div className={styles.dropdown}>
              <Link href="/dashboard/profesor" className={styles.dropdownItem}>
                <LayoutDashboard size={18} />
                Panel del Profesor
              </Link>

              <Link href="/dashboard/profesor/perfil" className={styles.dropdownItem}>
                <User size={18} />
                Mi Perfil
              </Link>

              <Link href="/dashboard/profesor/tutorias" className={styles.dropdownItem}>
                <Users size={18} />
                Mis Tutorías
              </Link>

              <Link href="/dashboard/profesor/configuracion" className={styles.dropdownItem}>
                <Settings size={18} />
                Configuración
              </Link>

              <button className={styles.dropdownItem}>
                <LogOut size={18} />
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
