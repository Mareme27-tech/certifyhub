import Link from "next/link";

export default function Step2Verify() {
  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-2xl font-bold mb-6">Biometric Verification</h1>
      <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-dashed border-blue-400">
        <p className="text-gray-500">Camera Feed Placeholder</p>
      </div>
      <Link href="/certification/review" className="block bg-green-600 text-white py-3 rounded-xl font-bold">
        Complete Scan
      </Link>
    </div>
  );
}