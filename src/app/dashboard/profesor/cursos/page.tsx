"use client";

import Link from "next/link";
import styles from "./cursos.module.css";

export default function CursosProfesor() {
  const cursos = [
    {
      id: 1,
      titulo: "Curso de Energía Solar",
      descripcion: "Aprende diseño fotovoltaico profesional.",
      imagen: "/img/curso-1.jpg",
    },
    {
      id: 2,
      titulo: "Curso de Termodinámica",
      descripcion: "Fundamentos del ciclo Rankine y análisis térmico.",
      imagen: "/img/curso-2.jpg",
    },
  ];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Mis Cursos</h1>

      <div className={styles.header}>
        <Link href="/dashboard/profesor/cursos/crear" className={styles.btnNuevo}>
          Crear nuevo curso
        </Link>
      </div>

      <div className={styles.grid}>
        {cursos.map((curso) => (
          <div key={curso.id} className={styles.card}>
            <img src={curso.imagen} alt={curso.titulo} className={styles.img} />

            <div className={styles.info}>
              <h3>{curso.titulo}</h3>
              <p>{curso.descripcion}</p>

              <Link
                href={`/dashboard/profesor/cursos/${curso.id}`}
                className={styles.btnVer}
              >
                Ver curso
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
