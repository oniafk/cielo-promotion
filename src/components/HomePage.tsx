import ProductCarousel from "./ProductCarouselNew";

const HomePage: React.FC = () => {
  return (
    <div className="mt-16">
      {/* Section 1 */}
      <section className="w-full h-screen bg-blue-100">
        <div className="container mx-auto h-full flex flex-col md:flex-row items-center">
          {/* Left column - Text content */}
          <div className="w-full md:w-2/5 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              Gana un viaje a Machu Picchu
            </h1>
            <p className="text-lg md:text-xl text-blue-800 mb-4">
              Participa juntando la palabra "MACHUPICHU" en las tapas de cada
              uno de nuestros productos.
            </p>
            <p className="text-lg md:text-xl text-blue-800 mb-6">
              ¡Gana un viaje todo incluido para visitar el Perú!
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
              onClick={() => {
                document
                  .getElementById("participationForm")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ¡Participa Ahora!
            </button>
          </div>

          {/* Right column - Carousel */}
          <div className="w-full md:w-3/5 p-4">
            <ProductCarousel />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full h-screen bg-blue-100 text-white">
        <div className="container mx-auto h-full flex flex-col items-center justify-center p-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-800">
            ¿Cómo Participar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-4 text-blue-800">1</div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">
                Compra productos Cielo
              </h3>
              <p className="text-blue-800">
                Adquiere cualquier producto de nuestra línea y colecciona las
                tapas.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg ">
              <div className="text-4xl font-bold mb-4 text-blue-800">2</div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">
                Junta la palabra MACHUPICHU
              </h3>
              <p className="text-blue-800">
                Busca las letras en las tapas de los productos y completa la
                palabra mágica.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-4 text-blue-800">3</div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">
                Registra tu participación
              </h3>
              <p className="text-blue-800">
                Ingresa tus datos en nuestro formulario y estarás participando
                por el viaje soñado.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="participationForm"
        className="w-full h-screen bg-blue-100 flex"
      >
        <div className="container w-full h-full flex flex-col md:flex-row items-center content-around">
          {/* Left side - Image with no padding fixed to left */}
          <div className="w-full h-full flex items-center md:justify-start pl-0">
            <img
              src="/aguaCieloBottle.jpeg"
              alt="Agua Cielo Bottle"
              className="h-full object-contain"
            />
          </div>

          {/* Right side - Form */}
          <div className="w-full md:w-3/5 p-8 md:p-12 bg-white/40 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
              Participa Ahora
            </h2>
            <p className="text-lg text-blue-800 mb-6">
              Muestra la palabra "MACHUPICHU" y participa por tu viaje todo pago
              para visitar el Perú
            </p>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-blue-800"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ej: Juan Pérez"
                  className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-800"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ej: juan.perez@email.com"
                  className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-blue-800"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ej: 999 888 777"
                  className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-blue-800"
                >
                  Sube tu foto con las tapas de "MACHUPICHU"
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
                >
                  Enviar Participación
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
