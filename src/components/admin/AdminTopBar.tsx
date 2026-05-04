"use client";
import AdminMenu  from "./AdminMenu";
import "./AdminTopBar.css";

export default function AdminTopBar() {
  return (
    <header className="admin-topbar">
      <nav className="admin-topbar-menu">
        <a href="#" className="active">PANELES</a>
        <a href="#">REPORTE</a>
        <a href="#">CUENTA</a>
      </nav>

    
        <div className="admin-topbar-profile">
        <AdminMenu />
        </div>
      
    </header>
  );
}
