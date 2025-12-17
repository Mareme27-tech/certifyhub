import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-[#001B3D]">Sign In</h1>
      <p className="text-gray-500 mb-6">Access your CertifyHub account</p>
      <div className="w-full max-w-sm space-y-4">
        <input className="w-full p-3 border rounded-lg" type="email" placeholder="Email" />
        <input className="w-full p-3 border rounded-lg" type="password" placeholder="Password" />
        <Link href="/dashboard" className="block w-full bg-[#001B3D] text-white text-center py-3 rounded-lg font-bold">
          Login
        </Link>
      </div>
      <p className="mt-4 text-sm">Don't have an account? <Link href="/register" className="text-blue-600">Register</Link></p>
    </div>
  );
}