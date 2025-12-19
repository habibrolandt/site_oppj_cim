import logoOppj from "../assets/Images/logo1.jpg"
import heroBackground from "../assets/Images/image1.jpg"
function HeroSection() {
  // Fonction pour défilement fluide
  const scrollToRejoindre = () => {
    const section = document.getElementById('rejoindre');
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-zoomIn flex justify-center">
            <img
              src={logoOppj || "/placeholder.svg"}
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
            
            {/* MODIFICATION ICI : Remplacez <a> par <button> */}
            <button
              onClick={scrollToRejoindre}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              Intégrer le groupe whatsapp des jeunes de la paroisse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;