"use client";

import PerfilSidebar from "@/components/students/PerfilSidebar";
import "./estudiante-layout.css";

export default function PerfilLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="perfil-layout">
      <PerfilSidebar />

      <div className="perfil-content-wrapper" style={{ marginLeft: "240px" }}>
        {children}
      </div>
    </div>
  );
}
