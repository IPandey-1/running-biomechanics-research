import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">

        <Link
          href="/"
          className="text-2xl font-extrabold text-gray-900 tracking-tight"
        >
          Biomechanics Research
        </Link>

        <div className="flex gap-8 text-lg font-medium text-gray-800">

          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>

          <Link href="/research" className="hover:text-blue-600 transition-colors">
            Research
          </Link>

          <Link href="/methods" className="hover:text-blue-600 transition-colors">
            Methods
          </Link>

          <Link href="/results" className="hover:text-blue-600 transition-colors">
            Results
          </Link>

          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>

        </div>
      </div>
    </nav>
  );
}