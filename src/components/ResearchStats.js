export default function ResearchStats() {
  return (
    <>
      {<section className="max-w-6xl mx-auto py-20 px-8">

          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Research at a Glance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
              <h3 className="text-5xl font-bold text-blue-600">50%</h3>
              <p className="mt-4 text-lg text-gray-700">
                Annual running injury rate
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
              <h3 className="text-5xl font-bold text-blue-600">1</h3>
              <p className="mt-4 text-lg text-gray-700">
                Independent variable
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
              <h3 className="text-5xl font-bold text-blue-600">2026</h3>
              <p className="mt-4 text-lg text-gray-700">
                Research project
              </p>
            </div>

          </div>

        </section>}
    </>
  );
}