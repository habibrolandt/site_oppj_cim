import { Music, BookOpen, Users, Heart, MessageSquare, Sparkles } from "lucide-react"
import RejoindreSection from "../Components/RejoindreSection"

function Activites() {
  const activites = [
    {
      id: 1,
      title: "Chorale",
      icon: Music,
      description:
        "Animation des célébrations eucharistiques par le chant et la musique. Répétitions tous les mercredis à 18h.",
      color: "from-blue-500 to-purple-500",
      details: ["Chants liturgiques", "Formation vocale", "Concerts spirituels", "Animation des messes"],
    },
    {
      id: 2,
      title: "Liturgie",
      icon: Sparkles,
      description: "Préparation et animation des célébrations liturgiques, formation des servants d'autel et lecteurs.",
      color: "from-green-500 to-teal-500",
      details: ["Servants d'autel", "Lecteurs", "Sacristie", "Décoration de l'église"],
    },
    {
      id: 3,
      title: "Formation",
      icon: BookOpen,
      description:
        "Approfondissement de la foi chrétienne à travers des sessions bibliques, théologiques et spirituelles.",
      color: "from-yellow-500 to-orange-500",
      details: ["Études bibliques", "Catéchèse", "Conférences", "Retraites spirituelles"],
    },
    {
      id: 4,
      title: "Communication",
      icon: MessageSquare,
      description: "Gestion des réseaux sociaux, création de contenus, diffusion des informations et événements.",
      color: "from-pink-500 to-red-500",
      details: ["Réseaux sociaux", "Site web", "Photographie", "Design graphique"],
    },
    {
      id: 5,
      title: "Action Sociale",
      icon: Heart,
      description: "Engagement auprès des plus démunis, visites aux malades, œuvres caritatives et solidarité.",
      color: "from-red-500 to-pink-500",
      details: ["Visites aux malades", "Aide aux démunis", "Collectes de vivres", "Soutien scolaire"],
    },
    {
      id: 6,
      title: "Fraternité",
      icon: Users,
      description: "Organisation d'activités de partage et de convivialité pour renforcer les liens communautaires.",
      color: "from-indigo-500 to-blue-500",
      details: ["Sorties fraternelles", "Repas communautaires", "Jeux et loisirs", "Partage d'expériences"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12 animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nos Activités & Commissions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les différentes commissions de notre pastorale et trouvez celle qui correspond à vos talents et
            aspirations
          </p>
        </div>

        {/* Grille d'activités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {activites.map((activite, index) => (
            <div
              key={activite.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-zoomIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* En-tête avec gradient */}
              <div className={`bg-gradient-to-br ${activite.color} p-8 text-white`}>
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <activite.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold">{activite.title}</h3>
              </div>

              {/* Corps de carte */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">{activite.description}</p>

                {/* Liste des détails */}
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800 mb-3">Activités principales :</p>
                  <ul className="space-y-2">
                    {activite.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bouton */}
                <button className="mt-6 w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Rejoindre cette commission
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section d'appel à l'action */}
        <RejoindreSection />
      </div>
    </div>
  )
}

export default Activites
