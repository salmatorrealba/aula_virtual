"use client";

import SessionLoader from "@/components/SessionLoader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionLoader>
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* <Header />  ← ELIMINADO */}
          <main style={{ flex: 1, padding: "20px" }}>{children}</main>
        </div>
      </div>
    </SessionLoader>
  );
}
