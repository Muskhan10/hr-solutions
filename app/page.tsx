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
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-10 px-4 sm:px-6">
        {/* 🚀 Header */}
        <section className="text-center space-y-3">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white drop-shadow-sm">
            🚀 Frontend Developer Wanted
          </h1>
          <p className="text-sm sm:text-lg text-gray-300">
            Join our team to build stunning interfaces & user experiences that users love.
          </p>
        </section>

        {/* 📄 Job Summary */}
        <section className="bg-gray-900/90 rounded-2xl shadow-2xl border border-white/10 p-6 sm:p-8 space-y-5">
          <h2 className="text-lg sm:text-2xl font-bold text-white">📄 Job Summary</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
            <li>Build dynamic, user-friendly frontends with modern frameworks.</li>
            <li>Collaborate with UI/UX designers and backend engineers.</li>
            <li>Deliver high-quality, responsive, and accessible UIs.</li>
          </ul>
          <div className="text-center sm:text-left">
            <Link href="/apply">
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg transition-all w-full sm:w-auto text-sm sm:text-base">
                ✍️ Apply Now
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
