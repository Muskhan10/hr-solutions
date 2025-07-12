export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-gray-900 p-8 rounded-2xl shadow-2xl text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-blue-400 drop-shadow">
          📞 Contact Us
        </h1>

        <p className="text-lg text-gray-300">
          Feel free to reach out if you have any questions, ideas, or collaboration offers.
        </p>

        <div className="bg-gray-800 p-6 rounded-lg space-y-3 text-left text-gray-300">
          <p>
            <strong>📧 Email:</strong>{" "}
            <a href="mailto:Mustafaleo007@gmail.com" className="text-blue-400 underline">
              Mustafaleo007@gmail.com
            </a>
          </p>
          <p>
            <strong>📍 Location:</strong> Havelian Main Bazar
          </p>
        </div>

        <p className="text-sm text-gray-500 pt-4 italic">
          With respect, <br /> <strong>CEO M. Mustafa</strong>
        </p>
      </div>
    </main>
  );
}