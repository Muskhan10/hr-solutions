import Link from "next/link";
import { getApplicants } from "@/lib/actions";

export default async function Home() {
  const applicants = await getApplicants();

  return (
    <main
      className="min-h-screen text-white px-4 py-12 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🔲 Overlay for dark blur effect */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-10">
        {/* 🚀 Header */}
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow mb-4">
            🚀 Frontend Developer Wanted
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Join our team to build stunning interfaces & user experiences that users love.
          </p>
        </section>

        {/* 📄 Job Summary */}
        <section className="bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">📄 Job Summary</h2>
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
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition-all w-full sm:w-auto">
              ✍️ Apply Now
            </button>
          </Link>
        </section>

        {/* ✅ Total Count */}
        <section className="bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            📋 Total Registrations: {applicants.length}
          </h2>

          {/* ✅ Applicants List (Only Name + Registered) */}
          {applicants.length === 0 ? (
            <p className="text-gray-400">No applications yet. Be the first one to apply!</p>
          ) : (
            <ul className="space-y-3">
              {applicants.map((applicant: any) => (
                <li
                  key={applicant._id}
                  className="p-4 bg-gray-700 rounded-md hover:bg-gray-600 transition flex justify-between items-center"
                >
                  <span className="font-medium text-white">{applicant.name}</span>
                  <span className="text-green-400 text-sm">✔ Registered</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
