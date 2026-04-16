"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SessionLoader from "@/components/SessionLoader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionLoader>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header />
          <main style={{ flex: 1, padding: "20px" }}>{children}</main>
        </div>
      </div>
    </SessionLoader>
  );
}
