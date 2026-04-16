"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";

export default function AdminDashboard() {
  const router = useRouter();
  const { role } = useUserStore();

  useEffect(() => {
    if (role && role !== "admin") {
      router.push(`/dashboard/${role}`);
    }
  }, [role, router]);

  return (
    <div>
      <h1>Dashboard Admin</h1>
    </div>
  );
}
