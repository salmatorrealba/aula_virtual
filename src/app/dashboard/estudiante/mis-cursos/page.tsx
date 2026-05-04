"use client";
import "./mis-cursos.css";
import StudentTopBar from "@/components/students/StudentTopBar";
import CourseCard from "@/components/students/CourseCard";
import ProgressBar from "@/components/students/ProgressBar";
import { useRouter } from "next/navigation";

const cursosMock = [
  { id: "c1", title: "SEGURIDAD INDUSTRIAL AVANZADA", progress: 68, price: "28€", img: "/img/curso-1.jpg" },
  { id: "c2", title: "EFICIENCIA ENERGÉTICA EN PLANTAS", progress: 68, price: "28€", img: "/img/curso-1.jpg" },
  { id: "c3", title: "AUTOMATIZACIÓN INDUSTRIAL", progress: 65, price: "29€", img: "/img/curso-1.jpg" },
];

export default function EstudianteDashboard() {
  const router = useRouter();
  const cursoActual = cursosMock[0];

  function handleContinuar(cursoId: string) {
    router.push(`/dashboard/estudiante/curso/${cursoId}/leccion`);
  }

  return (
    <div className="student-layout">
  

      <div className="student-content">
        <StudentTopBar userName="Samara" />

        <main className="student-main">
          <section className="hero">
            <h1>¡BIENVENIDO! CONTINÚA TU FORMACIÓN</h1>
            <p>Avanza en tu curso actual y revisa tus progresos.</p>

            <div className="current-course">
              <h2>MI CURSO ACTUAL</h2>

              <div className="current-course-info">
                <div>
                  <strong>{cursoActual.title}</strong>
                  <p className="small">Progreso general</p>
                </div>

                <div className="progress-block">
                  <ProgressBar value={cursoActual.progress} />
                  <div className="progress-meta">
                    <span>{cursoActual.progress}%</span>
                    <button className="btn-primary" onClick={() => handleContinuar(cursoActual.id)}>
                      CONTINUAR LECCIÓN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mis-cursos">
            <h2>Mis Cursos</h2>

            <div className="cursos-grid">
              {cursosMock.map((c) => (
                <CourseCard
                  key={c.id}
                  title={c.title}
                  progress={c.progress}
                  img={c.img}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
