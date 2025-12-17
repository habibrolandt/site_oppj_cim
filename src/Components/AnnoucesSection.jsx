import { Bell, Calendar, Users, Heart } from "lucide-react"

function AnnouncesSection() {
  const announces = [
    {
      icon: Calendar,
      title: "Messe Dominicale",
      description: "Tous les dimanches à 9h à la paroisse Saint-Michel",
      date: "Chaque dimanche",
      color: "bg-blue-500",
    },
    {
      icon: Users,
      title: "Retraite Spirituelle",
      description: "Retraite de 3 jours pour approfondir notre foi ensemble",
      date: "15-17 Mars 2024",
      color: "bg-green-500",
    },
    {
      icon: Heart,
      title: "Action Caritative",
      description: "Visite aux malades et distribution de vivres",
      date: "22 Mars 2024",
      color: "bg-pink-500",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12 animate-slideUp">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-4">
              <Bell className="inline-block mr-2" size={20} />
              <span className="font-semibold">Annonces Importantes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Activités à venir</h2>
            <p className="text-xl text-gray-600">Découvrez les prochains événements de notre communauté</p>
          </div>

          {/* Grille d'annonces */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {announces.map((announce, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-zoomIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`${announce.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}
                >
                  <announce.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{announce.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{announce.description}</p>
                <div className="bg-gray-100 rounded-lg px-4 py-2 text-center">
                  <p className="text-sm font-semibold text-gray-700">📅 {announce.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnnouncesSection
