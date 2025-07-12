"use client";

import { useEffect, useState } from "react";

type Applicant = {
  _id?: string;
  name: string;
  email?: string;
};

export default function AdminPage() {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(true);

  const currentUser = { email: "mustafaleo007@gmail.com" };
  const ADMIN_EMAIL = "mustafaleo007@gmail.com";

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await fetch("/api/submit", { method: "GET" }); // 👈 IMPORTANT
        const data = await res.json();
        setApplicants(data);
      } catch (err) {
        console.error("❌ Error fetching applicants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  if (currentUser.email !== ADMIN_EMAIL) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-red-500 text-center">
        <h1 className="text-2xl font-bold">❌ Access Denied - Admins Only</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-400">🔒 Admin Panel</h1>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">📋 All Applicants</h2>

          {loading ? (
            <p className="text-gray-400">Loading applicants...</p>
          ) : applicants.length === 0 ? (
            <p className="text-gray-400">No applications yet.</p>
          ) : (
            <ul className="space-y-3">
              {applicants.map((applicant) => (
                <li
                  key={applicant._id}
                  className="p-4 bg-gray-800 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="text-white font-medium">{applicant.name}</p>
                    <p className="text-gray-400 text-sm">{applicant.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
