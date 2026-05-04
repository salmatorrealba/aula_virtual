"use client";

import CourseSidebar from "@/components/students/CourseSidebar";   // ← FALTABA ESTO

import StudentTopBar from "@/components/students/StudentTopBar";
import "./cursos-layout.css";

interface EstudianteLayoutProps {
  children: React.ReactNode;
}

export default function EstudianteLayout({ children }: EstudianteLayoutProps) {
  return (
    <div className="estudiante-layout">
      <CourseSidebar />  {/* si quieres sidebar de curso aquí */}
      {/* O si quieres el sidebar general del estudiante: */}


      <div className="estudiante-main">
       
        <div className="estudiante-content">{children}</div>
      </div>
    </div>
  );
}
