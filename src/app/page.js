import Image from "next/image";
import ResearchStats from "../components/ResearchStats";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-5 bg-white/90 backdrop-blur border-b border-gray-200">

        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Biomechanics Research
        </h2>

        <div className="flex gap-8 text-lg font-medium text-gray-800">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Home
          </a>

          <a href="#" className="hover:text-blue-600 transition-colors">
            Methods
          </a>

          <a href="#" className="hover:text-blue-600 transition-colors">
            About
          </a>
        </div>

      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-20 text-center">

        <h1 className="text-6xl font-extrabold mb-6 text-gray-900">
          Investigating Running Biomechanics
        </h1>

        <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
          Understanding how stride length influences biomechanical loading
          associated with running-related knee injuries.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">
          Explore Research
        </button>

      <div className="mt-16 flex justify-center">
  <Image
    src="/images/runner.jpg"
    alt="Runner"
    width={900}
    height={600}
    className="rounded-2xl shadow-xl"
  />
</div>

      </section>

    <ResearchStats />

    </main>
  );
}
