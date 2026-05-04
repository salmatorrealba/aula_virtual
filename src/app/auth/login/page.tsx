"use client";
import "./login.css";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";
import LoginNavbar from "@/components/LoginNavbar"; 

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      alert("Credenciales incorrectas");
      return;
    }

    const session = await fetch("/api/auth/session").then((r) => r.json());
    const role = session?.user?.role;

    useUserStore.getState().setUser(email, role);

    if (role === "admin") router.push("/dashboard/admin");
    if (role === "profesor") router.push("/dashboard/profesor");
    if (role === "estudiante") router.push("/dashboard/estudiante");
  }

  return (
    <>
      {/* NAVBAR SOLO CON “INICIAR SESIÓN” */}
      <LoginNavbar />

      {/* FONDO DEL LOGIN */}
      <div className="login-background">

        {/* CAJA DEL LOGIN */}
        <div className="login-container">

          <h2 className="login-title">INICIA TU SESIÓN</h2>

          <form onSubmit={handleLogin} className="login-form">

            <div>
              <label className="login-label">CORREO ELECTRÓNICO</label>
              <input
                type="email"
                placeholder="Ej. juan.perez@empresa.com"
                className="login-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="login-label">CONTRASEÑA</label>
              <input
                type="password"
                className="login-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <span className="login-forgot">¿OLVIDASTE TU CONTRASEÑA?</span>

            <button type="submit" className="login-button">
              INICIAR SESIÓN
            </button>

          </form>

          <div className="login-cert">
            <p>Certificaciones de seguridad</p>
            <div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
