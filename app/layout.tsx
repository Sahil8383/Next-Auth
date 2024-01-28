import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/providers/AuthProvider";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthProvider>
        <Navbar />
        <main className="flex flex-col flex-1">{children}</main>
      </AuthProvider>
    </div>
  );
}
