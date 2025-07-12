'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleAdminClick = () => {
    const password = prompt("🔐 Enter admin password:");
    if (password === "admin123") {
      router.push("/admin");
    } else if (password !== null) {
      alert("❌ Incorrect password!");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 text-white">
        
        {/* 🔹 Left: HR Solution logo/text */}
        <div className="text-lg sm:text-xl font-bold tracking-wide text-blue-400">
          HR Solutions
        </div>

        {/* 🔸 Center: Navigation Links */}
        <div className="flex justify-center items-center space-x-6 text-sm sm:text-base font-medium">
          <Link
            href="/"
            className="hover:text-blue-400 hover:underline transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-400 hover:underline transition duration-300"
          >
            About
          </Link>

          <Link
            href="/apply"
            className="hover:text-blue-400 hover:underline transition duration-300"
          >
            Apply
          </Link>

          <Link
            href="/contact"
            className="hover:text-blue-400 hover:underline transition duration-300"
          >
            Contact
          </Link>

          <button
            onClick={handleAdminClick}
            className="hover:text-red-400 hover:underline transition duration-300 focus:outline-none"
          >
            Admin Panel
          </button>
        </div>

        {/* 🔘 Right: Empty div to balance center alignment */}
        <div className="w-32 hidden sm:block"></div>
      </div>
    </nav>
  );
}