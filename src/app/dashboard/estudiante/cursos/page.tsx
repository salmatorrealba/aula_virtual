"use client";

import StudentTopBar from "@/components/students/StudentTopBar";
import CourseCard from "@/components/students/CourseCard";
import "./cursos.css";
import { useRouter } from "next/navigation";

export default function CursosEstudiantePage() {
  const router = useRouter();

  const cursosEstudiante = [
    {
      id: "c1",
      title: "SEGURIDAD INDUSTRIAL AVANZADA",
      progress: 68,
      img: "/img/curso1.jpg",
    },
    {
      id: "c2",
      title: "EFICIENCIA ENERGÉTICA EN PLANTAS",
      progress: 68,
      img: "/img/curso2.jpg",
    },
    {
      id: "c3",
      title: "AUTOMATIZACIÓN INDUSTRIAL",
      progress: 65,
      img: "/img/curso3.jpg",
    },
  ];

  return (
    <div className="student-dashboard">
      <div className="student-content">
        <StudentTopBar />

        <h2 className="page-title">Mis Cursos</h2>

        <div className="courses-grid">
          {cursosEstudiante.map((curso) => (
            <CourseCard
              key={curso.id}
              title={curso.title}
              progress={curso.progress}
              img={curso.img}
              onContinue={() =>
                router.push(`/dashboard/estudiante/curso/${curso.id}`)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
