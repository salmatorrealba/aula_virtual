"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";

export default function ProfesorDashboard() {
  const router = useRouter();
  const { role } = useUserStore();

  useEffect(() => {
    if (role && role !== "profesor") {
      router.push(`/dashboard/${role}`);
    }
  }, [role, router]);

  return (
    <div>
      <h1>Panel de Profesor</h1>
    </div>
  );
}
