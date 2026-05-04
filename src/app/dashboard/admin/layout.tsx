import "./admin.css";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopBar from "@/components/admin/AdminTopBar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <AdminTopBar />
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}
