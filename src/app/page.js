import Image from "next/image";
import ResearchStats from "../components/ResearchStats";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      

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
