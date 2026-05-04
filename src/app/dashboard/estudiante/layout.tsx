"use client";


import StudentTopBar from "@/components/students/StudentTopBar";
import "./estudiante-layout.css";

interface EstudianteLayoutProps {
  children: React.ReactNode;
}

export default function EstudianteLayout({ children }: EstudianteLayoutProps) {
  return (
    <div className="estudiante-layout">


      <div className="estudiante-main">
       
        <div className="estudiante-content">{children}</div>
      </div>
    </div>
  );
}
