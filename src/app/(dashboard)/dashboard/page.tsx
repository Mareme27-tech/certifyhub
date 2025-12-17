import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#001B3D]">Welcome Back, User</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl bg-white shadow-sm">
          <h2 className="font-bold text-lg">New Certification</h2>
          <p className="text-gray-500 mb-4">Start a new document verification process.</p>
          <Link href="/certification" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg">Start Now</Link>
        </div>
        <div className="p-6 border rounded-xl bg-white shadow-sm">
          <h2 className="font-bold text-lg">My Documents</h2>
          <p className="text-gray-500">View your previously certified files.</p>
        </div>
      </div>
    </div>
  );
}