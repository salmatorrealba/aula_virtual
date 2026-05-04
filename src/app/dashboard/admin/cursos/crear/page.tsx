"use client";
import styles from "./page.module.css";

export default function CrearCurso() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <h1 className={styles.title}>CREAR/EDITAR CURSO - CONFIGURACIÓN BÁSICA</h1>

        <div className={styles.grid}>

          {/* COLUMNA IZQUIERDA */}
          <div className={styles.leftCol}>

            <div className={styles.field}>
              <label className={styles.label}>TÍTULO DEL CURSO</label>
              <input className={styles.input} type="text" placeholder="Título del curso" />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>DESCRIPCIÓN TÉCNICA</label>
              <textarea className={styles.textarea} placeholder="- Dinámica de termofluidos..."></textarea>
            </div>

          </div>

          {/* COLUMNA DERECHA */}
          <div className={styles.rightCol}>

            <div className={styles.field}>
              <label className={styles.label}>CATEGORÍA</label>
              <input className={styles.input} type="text" placeholder="Sostenibilidad, Automatización..." />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>NIVEL</label>
              <input className={styles.input} type="text" placeholder="Eficiencia, niveles" />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>PROFESOR</label>
              <input className={styles.input} type="text" placeholder="Profesor Poler" />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>PRECIO</label>
              <input className={styles.input} type="number" placeholder="€" />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>IMAGEN</label>
              <input className={styles.input} type="file" />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>IMAGEN DE PORTADA</label>
              <input className={styles.input} type="file" />
            </div>

          </div>

        </div>

        <button className={styles.btn}>REGISTRAR CURSO</button>

      </div>
    </div>
  );
}
