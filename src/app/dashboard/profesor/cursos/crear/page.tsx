"use client";

import { useState } from "react";
import styles from "./crear.module.css";
import ProfesorTopBar from "@/components/profesor/ProfesorTopBar";

export default function CrearCurso() {
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    precio: "",
    imagen: null,
  });

  function handleChange(e: any) {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Curso creado:", form);
  }

  return (
    <div className={styles.page}>
      <ProfesorTopBar/>
      <h1 className={styles.title}>Crear Nuevo Curso</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <label>Título del curso</label>
          <input type="text" name="titulo" onChange={handleChange} required />
        </div>

        <div className={styles.group}>
          <label>Descripción</label>
          <textarea name="descripcion" rows={5} onChange={handleChange} required />
        </div>

        <div className={styles.group}>
          <label>Precio (€)</label>
          <input type="number" name="precio" onChange={handleChange} required />
        </div>

        <div className={styles.group}>
          <label>Imagen del curso</label>
          <input type="file" name="imagen" accept="image/*" onChange={handleChange} />
        </div>

        <button className={styles.btnCrear}>Crear Curso</button>
      </form>
    </div>
  );
}
