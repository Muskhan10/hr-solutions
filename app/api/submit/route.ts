// app/api/submit/route.ts

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// ✅ POST: Form data save kare
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("hr-solutions");
    const collection = db.collection("applicants");

    const result = await collection.insertOne({ name, email });

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error("❌ POST error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// ✅ GET: Admin panel ke liye data fetch kare
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("hr-solutions");
    const collection = db.collection("applicants");

    const applicants = await collection.find().toArray();

    return NextResponse.json(applicants); // 👈 Ye hi admin panel read karega
  } catch (error) {
    console.error("❌ GET error:", error);
    return NextResponse.json({ error: "Failed to fetch applicants" }, { status: 500 });
  }
}
