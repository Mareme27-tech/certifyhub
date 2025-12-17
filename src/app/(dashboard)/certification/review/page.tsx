import Link from "next/link";

export default function Step3Review() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Review & Submit</h1>
      <div className="bg-gray-50 p-6 rounded-xl space-y-4">
        <div className="flex justify-between border-b pb-2"><span>Document:</span> <strong>ID_Card.pdf</strong></div>
        <div className="flex justify-between border-b pb-2"><span>Biometrics:</span> <strong className="text-green-600">Verified ✅</strong></div>
      </div>
      <Link href="/certification/complete" className="mt-8 block text-center bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg">
        Submit for Certification
      </Link>
    </div>
  );
}