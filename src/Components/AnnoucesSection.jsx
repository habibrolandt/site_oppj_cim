import { Bell, Calendar, Users, Heart, School , PartyPopper } from "lucide-react"
import { Link } from "react-router-dom"

function AnnouncesSection() {
  const announces = [
    {
      icon: Calendar,
      title: "Messe de rentrée des jeunes",
      description: "Dimanche 20 Décembre 2025",
      date: "Dimanche 20 Décembre 2025",
      color: "bg-blue-500",
    },
    {
      icon: PartyPopper,
      title: "Maracana de fin d’année ",
      description: "Une journée sportive en frère et soeur en christ",
      date: " Dimanche 28 Décembre 2025",
      color: "bg-green-500",
    },
    {
      icon: School,
      title: "Pèlerinage décanal",
      description: "",
      date: " 08 Mars 2026",
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
            <p className="text-xl text-gray-600">Découvrez les prochaines activités jeune de notre paroisse.</p>
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
               <div className="bg-gray-100 rounded-lg px-4 py-3 text-center mb-4">
                  <p className="text-sm font-semibold text-gray-700">📅 {announce.date}</p>
                </div>
                <Link
                  to="/programme"
                  className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300 text-center"
                >
                  Plus d'infos
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnnouncesSection
