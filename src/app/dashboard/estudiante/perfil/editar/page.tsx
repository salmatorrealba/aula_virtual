"use client";

import "./editar-perfil.css";

export default function EditarPerfilPage() {
  return (
    <div className="editar-perfil-container">
      <h1 className="editar-title">Editar perfil</h1>
      <p className="editar-subtitle">Modifica tus datos personales.</p>

      <form className="editar-form">
        <div className="campo">
          <label>Nombre completo</label>
          <input type="text" placeholder="Tu nombre" />
        </div>

        <div className="campo">
          <label>Correo electrónico</label>
          <input type="email" placeholder="tu@email.com" />
        </div>

        <div className="campo">
          <label>Contraseña nueva</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <div className="botones">
          <button className="btn">Guardar cambios</button>
          <button className="btn btn-cancelar" type="button">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
