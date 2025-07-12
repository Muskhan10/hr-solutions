// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen text-white px-4 py-10 sm:py-16 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-0" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-12 px-4 sm:px-6">
        {/* 🚀 Header */}
        <section className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-xl mb-4 leading-tight">
            🚀 We're Hiring Frontend Developers
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto leading-relaxed">
            Help us craft exceptional user interfaces with React, Next.js, and Tailwind CSS.
          </p>
        </section>

        {/* 📄 Job Summary */}
        <section className="bg-gray-900/80 backdrop-blur rounded-2xl shadow-2xl p-6 sm:p-8 space-y-5 text-sm sm:text-base border border-gray-700">
          <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2">
            📄 Job Summary
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We’re searching for a frontend developer passionate about clean, scalable code and beautiful UIs.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Collaborate with designers and backend engineers to deliver pixel-perfect applications.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If you have an eye for design and care about UX — this is your spot.
          </p>
          <div className="pt-4">
            <Link href="/apply">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium px-6 py-2.5 rounded-xl shadow-lg transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
                ✍️ Apply Now
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
