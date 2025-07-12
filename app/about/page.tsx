'use client'; // 🔥 Important: Needed for client-side component

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-gray-900 text-white px-4 py-12">
      <div className="max-w-3xl mx-auto text-center space-y-8">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow">
          👋 About Us
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300">
          We are not just developers — we are problem solvers, designers, and innovators.
        </p>

        {/* Divider */}
        <hr className="border-gray-600 my-4 w-1/3 mx-auto" />

        {/* Detailed Info Box */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg space-y-4 text-left sm:text-center">
          <p className="text-gray-300">
            🚀 Our team is focused on crafting modern, scalable web apps using technologies like <strong>React</strong>, <strong>Next.js</strong>, and <strong>MongoDB</strong>.
          </p>
          <p className="text-gray-300">
            🌱 We believe in continuous learning and always keeping up with the latest trends in frontend and backend development.
          </p>
          <p className="text-gray-300">
            🤝 We collaborate with clients to understand their vision and turn it into powerful digital experiences.
          </p>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 pt-4">
          Built with ❤️ by developers who love clean code and coffee.
        </p>
      </div>
    </main>
  );
}
