"use client";

import { useState } from "react";
import styles from "./tutorias.module.css";
import ProfesorTopBar from "@/components/profesor/ProfesorTopBar";

export default function TutoriasProfesor() {
  const alumnos = [
    { id: 1, nombre: "Alumno 101", curso: "Energía Solar", estado: "Activo" },
    { id: 2, nombre: "Alumno 202", curso: "Termodinámica", estado: "Activo" },
    { id: 3, nombre: "Alumno 303", curso: "Automatización", estado: "Inactivo" },
  ];

  const [seleccionado, setSeleccionado] = useState<any>(null);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  function programarTutoria() {
    console.log("Tutoría programada:", {
      alumno: seleccionado,
      fecha,
      hora,
    });
    alert("Tutoría programada correctamente");
  }

  return (
    <div className={styles.page}>
        <ProfesorTopBar/>
      <h1 className={styles.title}>Tutorías</h1>

      <div className={styles.layout}>
        
        {/* TABLA DE ALUMNOS */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Alumno</th>
                <th>Curso</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {alumnos.map((a) => (
                <tr key={a.id}>
                  <td>{a.nombre}</td>
                  <td>{a.curso}</td>
                  <td>{a.estado}</td>
                  <td>
                    <button
                      className={styles.btnVer}
                      onClick={() => setSeleccionado(a)}
                    >
                      Ver / Programar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PANEL LATERAL */}
        <div className={styles.panel}>
          {!seleccionado ? (
            <p className={styles.placeholder}>Selecciona un alumno</p>
          ) : (
            <>
              <h2 className={styles.panelTitle}>{seleccionado.nombre}</h2>
              <p className={styles.panelCurso}>Curso: {seleccionado.curso}</p>

              <div className={styles.group}>
                <label>Fecha de tutoría</label>
                <input
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </div>

              <div className={styles.group}>
                <label>Hora</label>
                <input
                  type="time"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                />
              </div>

              <button className={styles.btnProgramar} onClick={programarTutoria}>
                Programar Tutoría
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
