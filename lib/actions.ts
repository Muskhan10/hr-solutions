import clientPromise from "./mongodb";

export async function getApplicants() {
  const client = await clientPromise;
  const db = client.db("hr-solutions");
  const collection = db.collection("applicants"); // ✅ Same collection used in submit
  const applicants = await collection.find().toArray();
  return applicants;
}
