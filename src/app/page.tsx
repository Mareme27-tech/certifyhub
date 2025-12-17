import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-12 dark:bg-black">
      {/* CertifyHub Logo / Branding */}
      <div className="mb-8 flex flex-col items-center gap-2">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#001B3D] dark:text-white">
          Certify<span className="text-blue-600">Hub</span>
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Secure. Digital. Verified.
        </p>
      </div>

      <main className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-md text-2xl font-semibold leading-snug text-black dark:text-zinc-50">
          Professional Document Certification made simple.
        </h2>
        
        <p className="max-w-sm text-zinc-600 dark:text-zinc-400">
          Upload your ID, Affidavit, or Academic Certificates and get them verified instantly.
        </p>

        {/* The CTA Button */}
        <Link
          href="/signin"
          className="flex h-14 w-full items-center justify-center rounded-xl bg-[#001B3D] px-8 text-lg font-bold text-white transition-all hover:bg-blue-900 md:w-auto"
        >
          Welcome to CertifyHub
        </Link>
      </main>

      {/* Small Footer Footer */}
      <footer className="mt-16 text-sm text-zinc-400">
        &copy; 2025 CertifyHub Technologies
      </footer>
    </div>
  );
}