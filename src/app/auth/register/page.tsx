"use client";

import "./register.css";
import { useState, type ChangeEvent, type FormEvent } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Registro enviado (falta conectar backend)");
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center register-background">
        <div className="register-container bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
    <h2 className="register-title">CREA TU CUENTA</h2>

<form onSubmit={handleSubmit} className="register-form">

  <div>
    <label className="register-label">NOMBRE COMPLETO</label>
    <input
      name="name"
      type="text"
      className="register-input"
      placeholder="Ej. Juan Pérez"
      onChange={handleChange}
    />
  </div>

  <div>
    <label className="register-label">CORREO ELECTRÓNICO</label>
    <input
      name="email"
      type="email"
      className="register-input"
      placeholder="Ej. juan.perez@empresa.com"
      onChange={handleChange}
    />
  </div>

  <div>
    <label className="register-label">EMPRESA / ORGANIZACIÓN</label>
    <input
      name="company"
      type="text"
      className="register-input"
      placeholder="(Opcional)"
      onChange={handleChange}
    />
  </div>

  <div>
    <label className="register-label">CONTRASEÑA</label>
    <input
      name="password"
      type="password"
      className="register-input"
      onChange={handleChange}
    />
  </div>

  <div>
    <label className="register-label">CONFIRMAR CONTRASEÑA</label>
    <input
      name="confirmPassword"
      type="password"
      className="register-input"
      onChange={handleChange}
    />
  </div>

  <div className="register-checkbox">
    <input type="checkbox" />
    <span>ACEPTO LOS TÉRMINOS Y CONDICIONES</span>
  </div>

  <button type="submit" className="register-button">
    REGISTRARME
  </button>

</form>

<div className="register-footer">
  <a href="#">AYUDA</a> | <a href="#">SOPORTE</a>

</div>
        
        </div>
      </div>
    </>
  );
}
