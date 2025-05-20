const GanadoresPage: React.FC = () => {
  return (
    <div className="mt-16">
      <section className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
            Ganadores de la Promoción
          </h1>

          <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
            <p className="text-xl text-center text-gray-600 mb-8">
              Próximamente se anunciarán los ganadores de nuestra increíble
              promoción.
              <br />
              ¡Sigue participando!
            </p>

            <div className="flex justify-center">
              <img
                src="/logo_cielo.webp"
                alt="Logo Cielo"
                className="w-32 h-auto opacity-70"
              />
            </div>

            {/* Placeholder for future winners */}
            <div className="mt-12 space-y-6 hidden">
              {/* This section will be populated with winners later */}
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-blue-800">
                  Primer lugar
                </h3>
                <p className="text-gray-700">Nombre del ganador</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GanadoresPage;
