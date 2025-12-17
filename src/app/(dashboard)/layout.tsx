import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#001B3D] text-white hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-900">
          Certify<span className="text-blue-400">Hub</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="block p-3 rounded-lg hover:bg-blue-900 transition-colors">
            🏠 Dashboard
          </Link>
          <Link href="/certification" className="block p-3 rounded-lg hover:bg-blue-900 transition-colors">
            📄 New Certification
          </Link>
          <Link href="/profile" className="block p-3 rounded-lg hover:bg-blue-900 transition-colors">
            👤 My Profile
          </Link>
        </nav>

        <div className="p-4 border-t border-blue-900">
          <Link href="/" className="block p-3 text-sm text-zinc-400 hover:text-white">
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="h-16 bg-white border-b flex items-center px-8 md:hidden">
          <span className="font-bold text-[#001B3D]">CertifyHub</span>
        </header>

        <main className="flex-1 bg-zinc-50">
          {children}
        </main>
      </div>
    </div>
  );
}