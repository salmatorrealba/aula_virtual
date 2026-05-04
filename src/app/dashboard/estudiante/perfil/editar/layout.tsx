"use client";

import SettingsSidebar from "@/components/students/SettingsSidebar";

interface EditarPerfilLayoutProps {
  children: React.ReactNode;
}

export default function EditarPerfilLayout({ children }: EditarPerfilLayoutProps) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      <SettingsSidebar />

     <div
  style={{
    flex: 1,
    marginLeft: "220px",   // espacio del sidebar
    padding: "60px 40px",
    display: "flex",
    justifyContent: "center",   // ← CENTRA el formulario
    alignItems: "flex-start",
  }}
>
  <div style={{ width: "100%", maxWidth: "700px" }}>
    {children}

        </div>
      </div>

    </div>
  );
}
