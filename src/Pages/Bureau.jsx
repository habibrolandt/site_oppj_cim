import { Mail, Phone } from "lucide-react"

function Bureau() {
  const membres = [
    {
      id: 1,
      nom: "KOUAME",
      prenom: "Jean-Paul",
      poste: "Président",
      photo: "/homme-africain-souriant.jpg",
      email: "president@pastorale.com",
      phone: "+225 XX XX XX XX XX",
    },
    {
      id: 2,
      nom: "DIABATE",
      prenom: "Marie-Claire",
      poste: "Vice-Présidente",
      photo: "/femme-africaine-souriante.jpg",
      email: "vp@pastorale.com",
      phone: "+225 XX XX XX XX XX",
    },
    {
      id: 3,
      nom: "TOURE",
      prenom: "Emmanuel",
      poste: "Secrétaire Général",
      photo: "/homme-africain-professionnel.jpg",
      email: "secretaire@pastorale.com",
      phone: "+225 XX XX XX XX XX",
    },
    {
      id: 4,
      nom: "YAO",
      prenom: "Esther",
      poste: "Trésorière",
      photo: "/femme-africaine-professionnelle.jpg",
      email: "tresorier@pastorale.com",
      phone: "+225 XX XX XX XX XX",
    },
    {
      id: 5,
      nom: "KONE",
      prenom: "David",
      poste: "Responsable Communication",
      photo: "/jeune-homme-africain.jpg",
      email: "communication@pastorale.com",
      phone: "+225 XX XX XX XX XX",
    },
    {
      id: 6,
      nom: "BAMBA",
      prenom: "Grace",
      poste: "Responsable Liturgie",
      photo: "/jeune-femme-africaine.jpg",
      email: "liturgie@pastorale.com",
      phone: "+225 XX XX XX XX XX",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12 animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Membres du Bureau</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rencontrez l'équipe dévouée qui coordonne les activités de notre communauté
          </p>
        </div>

        {/* Grille de membres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {membres.map((membre, index) => (
            <div
              key={membre.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-zoomIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo */}
              <div className="relative h-64 bg-gradient-to-br from-green-400 to-blue-400 overflow-hidden">
                <img
                  src={membre.photo || "/placeholder.svg"}
                  alt={`${membre.prenom} ${membre.nom}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="bg-yellow-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold">
                    {membre.poste}
                  </span>
                </div>
              </div>

              {/* Informations */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {membre.prenom} {membre.nom}
                </h3>
                <p className="text-green-600 font-semibold mb-4">{membre.poste}</p>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Mail size={18} className="mr-3 text-green-600" />
                    <a href={`mailto:${membre.email}`} className="hover:text-green-600 transition-colors text-sm">
                      {membre.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone size={18} className="mr-3 text-green-600" />
                    <a href={`tel:${membre.phone}`} className="hover:text-green-600 transition-colors text-sm">
                      {membre.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bureau
