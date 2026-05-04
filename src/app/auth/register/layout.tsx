import NavBar from "@/components/NavBar";

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
