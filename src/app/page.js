import Image from "next/image";
import Link from "next/link";
import ResearchStats from "../components/ResearchStats";

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-gray-50">

        <div className="max-w-7xl mx-auto px-8 py-24">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>

              <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">
                Independent Biomechanics Research
              </p>

              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Investigating Running Biomechanics
              </h1>

              <p className="mt-6 text-xl leading-8 text-gray-600 max-w-xl">
                Understanding how stride length influences biomechanical
                loading associated with running-related knee injuries.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/research"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                >
                  Explore Research
                </Link>

                <Link
                  href="/methods"
                  className="border border-gray-300 hover:border-gray-400 bg-white text-gray-900 px-7 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Methods
                </Link>

              </div>

            </div>

            {/* Image */}
            <div className="relative">

              <Image
                src="/runner.jpg"
                alt="Runner completing a stride"
                width={900}
                height={600}
                priority
                className="w-full rounded-2xl shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Research at a Glance */}
      <ResearchStats />

    {/* Project Overview */}
<section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <div>
        <p className="text-blue-600 font-semibold uppercase tracking-wide">
          The Project
        </p>

        <h2 className="mt-3 text-4xl font-bold text-gray-900">
          Why study running biomechanics?
        </h2>
      </div>

      <div>
        <p className="text-lg leading-8 text-gray-600">
          Running injuries can interrupt months of training and competition.
          This project investigates whether changes in running form may
          influence the biomechanical loading experienced during running.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Specifically, I am investigating how stride length affects
          biomechanical measures associated with running-related knee injury
          risk using video-based motion analysis.
        </p>

        <Link
          href="/research"
          className="inline-block mt-8 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
        >
          Learn more about the research →
        </Link>
      </div>

    </div>

  </div>
</section>

      {/* Research Workflow */}
<section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-8">

    <div className="text-center">
      <p className="text-blue-600 font-semibold uppercase tracking-wide">
        Research Process
      </p>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        From Video to Biomechanical Analysis
      </h2>

      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        The investigation uses video-based motion analysis to examine how
        changes in stride length may affect biomechanical loading.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14">

      {/* Step 1 */}
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl font-bold">
          1
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-900">
          Record
        </h3>

        <p className="mt-3 text-gray-600">
          Capture running trials on video under controlled conditions.
        </p>
      </div>

      {/* Step 2 */}
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl font-bold">
          2
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-900">
          Track
        </h3>

        <p className="mt-3 text-gray-600">
          Track key points of the runner's motion frame by frame.
        </p>
      </div>

      {/* Step 3 */}
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl font-bold">
          3
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-900">
          Calculate
        </h3>

        <p className="mt-3 text-gray-600">
          Calculate stride and biomechanical measures from the recorded motion.
        </p>
      </div>

      {/* Step 4 */}
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl font-bold">
          4
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-900">
          Analyze
        </h3>

        <p className="mt-3 text-gray-600">
          Compare measurements to investigate the relationship between stride
          length and biomechanical loading.
        </p>
      </div>

    </div>

  </div>
</section>

    </main>
  );
}