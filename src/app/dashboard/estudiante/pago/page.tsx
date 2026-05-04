"use client";

import { useState } from "react";
import "./pago.css";
import ConfigTopBar from "@/components/custom/ConfigTopBar";
import "@/components/custom/ConfigTopBar.css";

export default function PagoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    password: "",
    tarjetaNombre: "",
    tarjetaNumero: "",
    tarjetaFecha: "",
    tarjetaCVC: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const finalizarPago = (e) => {
    e.preventDefault();

    // Guardar usuario en localStorage (simulación)
    localStorage.setItem("user", JSON.stringify(formData));

    // Redirigir a confirmación
    window.location.href = "/dashboard/estudiante/confirmacion";
  };

  return (
    <>
      <ConfigTopBar />

      <div className="pago-page">

        {/* PASOS */}
        <div className="pago-steps">
          <span className="step active">1. Carrito</span>
          <span className="step active">→ 2. Pago</span>
          <span className="step">→ 3. Confirmación</span>
        </div>

        <div className="pago-layout">

          {/* RESUMEN */}
          <div className="pago-resumen">
            <h2>RESUMEN DEL PEDIDO</h2>
            <p><strong>Curso:</strong> EFICIENCIA ENERGÉTICA EN PLANTAS</p>
            <p><strong>Precio:</strong> 29€</p>
            <p><strong>Total:</strong> 29€</p>
          </div>

          {/* FORMULARIO */}
          <div className="pago-form">
            <h2>Datos del estudiante y pago</h2>

            <form onSubmit={finalizarPago}>

              {/* DATOS DEL ESTUDIANTE */}
              <h3 className="form-section-title">Datos personales</h3>

              <div className="form-group">
                <label>Nombre</label>
                <input name="nombre" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Apellidos</label>
                <input name="apellidos" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Teléfono</label>
                <input name="telefono" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Contraseña</label>
                <input type="password" name="password" onChange={handleChange} required />
              </div>

              {/* DATOS DE TARJETA */}
              <h3 className="form-section-title">Datos de pago</h3>

              <div className="form-group">
                <label>Nombre en la tarjeta</label>
                <input name="tarjetaNombre" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Número de tarjeta</label>
                <input name="tarjetaNumero" onChange={handleChange} required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Fecha de caducidad (MM/AA)</label>
                  <input name="tarjetaFecha" onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>CVC</label>
                  <input name="tarjetaCVC" onChange={handleChange} required />
                </div>
              </div>

              <button type="submit" className="btn-finalizar">
                Finalizar pago (29€)
              </button>

            </form>
          </div>

        </div>
      </div>
    </>
  );
}
