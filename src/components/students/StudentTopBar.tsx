"use client";

import StudentMenu from "./StudentMenu";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import "./student-topbar.css";

export default function StudentTopBar() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);

  function goLogin() {
    router.push("/auth/login");
  }

  return (
    <header className="student-topbar">
      <div className="student-topbar-inner">
        <nav className="top-nav">
          <a href="/dashboard/estudiante">INICIO</a>
          <a href="/dashboard/estudiante/mis-cursos">MIS CURSOS</a>
          <a href="/dashboard/estudiante/cursos">CURSOS</a>
          <a href="/dashboard/estudiante/mi-area">MI ÁREA</a>
          <a href="/dashboard/estudiante/catalogo">CATALOGO</a>
        </nav>

        <div className="topbar-right">
          {user ? (
            <StudentMenu userName={user.name} />
          ) : (
            <button className="login-btn" onClick={goLogin}>
              Iniciar sesión
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
