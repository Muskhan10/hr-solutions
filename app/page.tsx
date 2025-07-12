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

      <div className="relative z-10 max-w-3xl mx-auto space-y-10 px-4 sm:px-6">
        {/* 🚀 Header */}
        <section className="text-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white drop-shadow mb-3 leading-snug">
            🚀 Frontend Developer Wanted
          </h1>
          <p className="text-sm sm:text-lg text-gray-300 max-w-md mx-auto">
            Join our team to build stunning interfaces & user experiences that users love.
          </p>
        </section>

        {/* 📄 Job Summary */}
        <section className="bg-gray-800 rounded-2xl shadow-lg p-5 sm:p-8 space-y-4 text-sm sm:text-base">
          <h2 className="text-lg sm:text-2xl font-bold text-white">📄 Job Summary</h2>
          <p className="text-gray-300">
            We are looking for a skilled front-end developer to join our team and build dynamic, user-friendly apps.
          </p>
          <p className="text-gray-300">
            You will turn design wireframes into high-quality code and work with designers & backend developers to enhance UX.
          </p>
          <p className="text-gray-300">
            If you love clean UIs and have an eye for detail — we want you!
          </p>
          <Link href="/apply">
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow transition-all w-full sm:w-auto text-sm sm:text-base">
              ✍️ Apply Now
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
