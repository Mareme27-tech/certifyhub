import Link from "next/link";

export default function Step1Upload() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="mb-8 flex justify-between text-sm font-bold text-blue-600">
        <span>Step 1: Upload</span> <span className="text-gray-300">Step 2: Verify</span>
      </div>
      <h1 className="text-2xl font-bold mb-4">Select Document Type</h1>
      <div className="space-y-4">
        {["ID Document", "Affidavit", "Academic Record"].map((doc) => (
          <button key={doc} className="w-full text-left p-4 border rounded-xl hover:bg-blue-50 transition-colors">
            {doc}
          </button>
        ))}
      </div>
      <Link href="/certification/verify" className="mt-8 block text-center bg-[#001B3D] text-white py-3 rounded-xl font-bold">
        Next: Biometric Verify
      </Link>
    </div>
  );
}