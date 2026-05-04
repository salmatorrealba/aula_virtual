"use client";

import React from "react";
import Link from "next/link";
import "./cursos.css";

export default function GestionCursos() {
  const cursos = [
    {
      id: 101,
      titulo: "MÁSTER EN EFICIENCIA ENERGÉTICA",
      profesor: "Anonino_ID_101",
      categoria: "Ingeniería Técnica",
      fecha: "2023-03-23 16:19",
      estado: "Publicado",
      precio: "9.00",
    },
    {
      id: 202,
      titulo: "CURSO DE SEGURIDAD INDUSTRIAL",
      profesor: "Anonino_ID_202",
      categoria: "Ingeniería Técnica",
      fecha: "2023-03-23 16:40",
      estado: "Publicado",
      precio: "9.00",
    },
    {
      id: 203,
      titulo: "CURSO DE SEGURIDAD TÉCNICO",
      profesor: "Anonino_ID_202",
      categoria: "Ingeniería Técnica",
      fecha: "2023-03-23 16:40",
      estado: "Publicado",
      precio: "9.00",
    },
    {
      id: 304,
      titulo: "CURSO DE INDUSTRIAL",
      profesor: "Anonino_ID_303",
      categoria: "Ingeniería Técnica",
      fecha: "2023-03-23 16:17",
      estado: "Publicado",
      precio: "9.00",
    },
    {
      id: 305,
      titulo: "MÁSTER EN EFICIENCIA ENERGÉTICA",
      profesor: "Alumino_ID_101",
      categoria: "Ingeniería Técnica",
      fecha: "2023-03-23 16:17",
      estado: "Publicado",
      precio: "9.00",
    },
  ];

  return (
    <div className="cursos-container">

      {/* TÍTULO */}
      <h1 className="titulo-gestion">Gestión Integral de Cursos - Panel de Administración</h1>

      {/* FILTROS */}
      <div className="filtros">
        <select>
          <option value="">Categoría Técnica</option>
          <option>Ingeniería Técnica</option>
          <option>Programación</option>
          <option>Marketing</option>
        </select>

        <select>
          <option value="">Profesor Asignado</option>
          <option>Anonino_ID_101</option>
          <option>Anonino_ID_202</option>
          <option>Anonino_ID_303</option>
        </select>

        <select>
          <option value="">Estado</option>
          <option>Publicado</option>
          <option>Borrador</option>
        </select>

        <Link href="/dashboard/admin/cursos/crear" className="btn-crear">
          CREAR NUEVO CURSO
        </Link>
      </div>

      {/* TABLA */}
      <table className="tabla-cursos">
        <thead>
          <tr>
            <th>ID Curso</th>
            <th>Título Técnico</th>
            <th>Profesor Asignado</th>
            <th>Categoría Técnica</th>
            <th>Fecha Creación</th>
            <th>Estado</th>
            <th>Precio (€)</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id}>
              <td>{curso.id}</td>
              <td>{curso.titulo}</td>
              <td>{curso.profesor}</td>
              <td>{curso.categoria}</td>
              <td>{curso.fecha}</td>
              <td>
                <span className={`estado ${curso.estado.toLowerCase()}`}>
                  {curso.estado}
                </span>
              </td>
              <td>{curso.precio}</td>
              <td className="acciones">
                <Link href={`/dashboard/admin/cursos/${curso.id}`} className="✏️">
                  Editar
                </Link>
                <button
  className="eliminar"
  onClick={async () => {
    if (!confirm("¿Seguro que deseas eliminar este curso?")) return;

    const res = await fetch(`/api/cursos/${curso.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Curso eliminado correctamente");
      window.location.reload();
    } else {
      alert("Error al eliminar el curso");
    }
  }}
>
  Eliminar
</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
