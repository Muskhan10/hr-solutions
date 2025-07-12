// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HR Solutions",
  description: "Find your next frontend job",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* ✅ Add this line */}
        {children}
      </body>
    </html>
  );
}
