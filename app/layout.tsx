import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import AuthProvider from "@/components/providers/AuthProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen dark:bg-[#1F1F1F]  ">
      <AuthProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex flex-col flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}
