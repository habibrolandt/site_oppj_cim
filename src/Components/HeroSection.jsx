function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-orange-400 text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-zoomIn flex justify-center">
            <img
              src="/images/logo-20oppj-20cim-20.jpg"
              alt="Logo OPPJ"
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>

          <div className="animate-slideUp space-y-1">
            <h1 className="text-xl md:text-2xl font-bold leading-tight">ARCHIDIOCÈSE D'ABIDJAN</h1>
            <h2 className="text-base md:text-xl font-semibold leading-tight">
              PAROISSE CŒUR IMMACULÉE DE MARIE DU PLATEAU DOKUI CITÉ FOREST
            </h2>
            <h3 className="text-base md:text-lg font-semibold leading-tight">
              OFFICE PAROISSIAL DE LA PASTORALE DES JEUNES
            </h3>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-slideUp delay-400">
            <a
              href="/programme"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              Voir le Programme
            </a>
            <a
              href="#rejoindre"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Nous Rejoindre
            </a>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  )
}

export default HeroSection
