"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";

export default function EstudianteDashboard() {
  const router = useRouter();
  const { role } = useUserStore();

  useEffect(() => {
    if (role && role !== "estudiante") {
      router.push(`/dashboard/${role}`);
    }
  }, [role, router]);

  return (
    <div>
      <h1>Panel de Estudiante</h1>
    </div>
  );
}
