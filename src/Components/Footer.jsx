import { Facebook, Instagram, Youtube } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Section À propos */}
          <div className="animate-fadeIn">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-2xl">✝️</span>
              </div>
              <h3 className="text-xl font-bold">Pastorale des Jeunes</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Une communauté de jeunes catholiques engagés à vivre leur foi au quotidien et à témoigner de l'amour du
              Christ.
            </p>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-400">
              "Soyez dans la joie du Seigneur, votre Dieu" - Joël 2:23
            </blockquote>
          </div>

         

          {/* Section Contact */}
          <div className="animate-fadeIn delay-300">
            <h3 className="text-xl font-bold mb-4">Restez Connecté</h3>
            <p className="text-gray-300 mb-4">
              Rejoignez-nous sur nos réseaux sociaux pour rester informé de toutes nos activités !
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Pastorale des Jeunes Catholiques. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
