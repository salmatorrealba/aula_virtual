"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (res?.error) {
    alert("Credenciales incorrectas");
    return;
  }

  // Obtener la sesión con el rol
  const session = await fetch("/api/auth/session").then((r) => r.json());
  const role = session?.user?.role;

  //Guardar en Zustand
  useUserStore.getState().setUser(email,role);

  if (role === "admin") router.push("/dashboard/admin");
  if (role === "profesor") router.push("/dashboard/profesor");
  if (role === "estudiante") router.push("/dashboard/estudiante");
}


  return (
    <main className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 p-6 border rounded-lg w-80"
      >
        <h1 className="text-2xl font-bold text-center">Iniciar Sesión</h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="border p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}