"use client";
import "./crearUsuario.css";

export default function CrearUsuario() {
  return (
    <div className="crearUsuario-page">

      <div className="crearUsuario-container">
        <h1 className="crearUsuario-title">CREAR USUARIO</h1>

        <form className="crearUsuario-form">

          <div className="crearUsuario-field">
            <label>NOMBRE COMPLETO</label>
            <input type="text" placeholder="Ej. Juan Pérez" />
          </div>

          <div className="crearUsuario-field">
            <label>CORREO ELECTRÓNICO</label>
            <input type="email" placeholder="Ej. juan.perez@empresa.cc" />
          </div>

          <div className="crearUsuario-field">
            <label>ROL</label>
            <select>
              <option>Estudiante</option>
              <option>Profesor</option>
              <option>Administrador</option>
            </select>
          </div>

          <button className="crearUsuario-btn">REGISTRAR USUARIO</button>
        </form>
      </div>
    </div>
  );
}
