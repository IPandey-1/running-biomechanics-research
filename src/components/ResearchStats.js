export default function ResearchStats() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Research at a Glance
        </h2>

        <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
          An investigation into how running form may influence
          biomechanical loading associated with injury risk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

          <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-600">
              Stride Length
            </h3>

            <p className="mt-3 text-gray-600">
              Independent variable
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-600">
              Motion Analysis
            </h3>

            <p className="mt-3 text-gray-600">
              Primary measurement method
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-600">
              Biomechanical Loading
            </h3>

            <p className="mt-3 text-gray-600">
              Primary outcome of interest
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}