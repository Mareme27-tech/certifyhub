import Link from "next/link";

export default function Step4Complete() {
  return (
    <div className="max-w-2xl mx-auto p-12 text-center">
      <div className="text-6xl mb-4 text-green-500">🎉</div>
      <h1 className="text-3xl font-bold mb-2">Success!</h1>
      <p className="text-gray-500 mb-8">Your document has been certified and secured.</p>
      <Link href="/dashboard" className="text-blue-600 font-bold underline">Back to Dashboard</Link>
    </div>
  );
}