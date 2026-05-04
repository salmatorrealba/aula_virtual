"use client"

import Sidebar from "@/components/students/PerfilSidebar"; 
import React from "react";
import "./mi-perfil.css";
import { useRouter } from "next/navigation";




interface UserProfileProps {
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  role,
  avatarUrl,
}) => {
   const router = useRouter();
  return (
    <div className="perfil-wrapper">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO */}
      <div className="perfil-content">
        <main className="main">

         <section className="panel">
  <h2 className="panel__title">Perfil de usuario</h2>

  <div className="panel__grid">
    <div className="panel__field">
      <label>Nombre completo</label>
      <input type="text" value={name} readOnly />
    </div>

    <div className="panel__field">
      <label>Correo electrónico</label>
      <input type="email" value={email} readOnly />
    </div>

    <div className="panel__field">
      <label>Rol</label>
      <input type="text" value={role} readOnly />
    </div>
  </div>


    <button className="btn-secondary" onClick={() => console.log("Descargar PDF")}>
      Descargar PDF
    </button>
    <button
  className="btn btn--primary"
  onClick={() => router.push("/dashboard/estudiante/perfil/editar")}
>
  Actualizar datos
</button>
</section>


        </main>
      </div>
    </div>
  );
};

export default UserProfile;
