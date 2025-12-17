"use client"

import { Calendar, Plus, Eye } from "lucide-react"
import { useState } from "react"

function Programme() {
  const [selectedMonth, setSelectedMonth] = useState("all")
  const [flippedCards, setFlippedCards] = useState({})

  const programmes = [
    {
      id: 1,
      title: "Messe d'ouverture de l'année",
      date: "2024-01-14",
      month: "Janvier",
      monthValue: "janvier",
      description: "Célébration eucharistique pour commencer l'année dans la foi et la communion fraternelle.",
      time: "9h00",
      affiches: ["/affiche-messe-ouverture.jpg"],
    },
    {
      id: 2,
      title: "Retraite de Carême",
      date: "2024-02-17",
      month: "Février",
      monthValue: "fevrier",
      description: "Trois jours de prière, méditation et partage pour se préparer à Pâques.",
      time: "15h00",
      affiches: ["/affiche-retraite-careme.jpg"],
    },
    {
      id: 3,
      title: "Action Caritative",
      date: "2024-03-22",
      month: "Mars",
      monthValue: "mars",
      description: "Visite aux malades et aux personnes âgées, distribution de vivres.",
      time: "10h00",
      affiches: ["/affiche-action-caritative.jpg"],
    },
    {
      id: 4,
      title: "Veillée Pascale",
      date: "2024-04-06",
      month: "Avril",
      monthValue: "avril",
      description: "Célébration de la Résurrection du Christ avec toute la communauté.",
      time: "20h00",
      affiches: ["/affiche-veillee-pascale.jpg"],
    },
    {
      id: 5,
      title: "Pèlerinage Marial",
      date: "2024-05-12",
      month: "Mai",
      monthValue: "mai",
      description: "Pèlerinage à Notre-Dame pour honorer la Vierge Marie.",
      time: "7h00",
      affiches: ["/affiche-pelerinage-marial.jpg"],
    },
    {
      id: 6,
      title: "Formation Biblique",
      date: "2024-06-08",
      month: "Juin",
      monthValue: "juin",
      description: "Session de formation sur l'évangile de Saint Jean.",
      time: "14h00",
      affiches: ["/affiche-formation-biblique.jpg"],
    },
  ]

  const addToCalendar = (programme) => {
    const event = {
      text: programme.title,
      dates: programme.date.replace(/-/g, "") + "/" + programme.date.replace(/-/g, ""),
      details: programme.description,
      location: "Paroisse Cœur Immaculée de Marie",
    }

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`
    window.open(url, "_blank")
  }

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const filteredProgrammes =
    selectedMonth === "all" ? programmes : programmes.filter((p) => p.monthValue === selectedMonth)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-12">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12 animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Programme Annuel</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez toutes les activités et événements organisés par notre communauté tout au long de l'année
          </p>
        </div>

        {/* Filtres par mois */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeIn">
          <button
            onClick={() => setSelectedMonth("all")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedMonth === "all" ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-blue-100"
            }`}
          >
            Tous
          </button>
          {["janvier", "fevrier", "mars", "avril", "mai", "juin"].map((month) => (
            <button
              key={month}
              onClick={() => setSelectedMonth(month)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                selectedMonth === month
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-100"
              }`}
            >
              {month}
            </button>
          ))}
        </div>

        {/* Grille de programmes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProgrammes.map((programme, index) => (
            <div
              key={programme.id}
              className={`flip-card ${flippedCards[programme.id] ? "flipped" : ""} h-[500px] animate-zoomIn`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flip-card-inner h-full">
                {/* Face avant */}
                <div className="flip-card-front bg-white rounded-2xl shadow-xl overflow-hidden">
                  {/* Bouton "Voir l'affiche" */}
                  <button
                    onClick={() => toggleFlip(programme.id)}
                    className="absolute top-4 right-4 z-10 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 shadow-lg"
                  >
                    <Eye size={18} />
                    Voir l'affiche
                  </button>

                  {/* En-tête de carte */}
                  <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                        {programme.month}
                      </span>
                      <Calendar size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{programme.title}</h3>
                    <p className="text-blue-100">
                      📅{" "}
                      {new Date(programme.date).toLocaleDateString("fr-FR", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-blue-100 mt-1">🕐 {programme.time}</p>
                  </div>

                  {/* Corps de carte */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{programme.description}</p>

                    <button
                      onClick={() => addToCalendar(programme)}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                    >
                      <Plus size={20} className="mr-2" />
                      Ajouter au Calendrier
                    </button>
                  </div>
                </div>

                {/* Face arrière - Affiches */}
                <div className="flip-card-back bg-white rounded-2xl shadow-xl overflow-hidden p-6">
                  <button
                    onClick={() => toggleFlip(programme.id)}
                    className="absolute top-4 right-4 z-10 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                  >
                    ← Retour
                  </button>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 pr-24">{programme.title}</h3>

                  <div className="overflow-y-auto max-h-[400px] space-y-4">
                    {programme.affiches.map((affiche, idx) => (
                      <img
                        key={idx}
                        src={affiche || "/placeholder.svg"}
                        alt={`Affiche ${programme.title} ${idx + 1}`}
                        className="w-full rounded-lg shadow-md"
                      />
                    ))}
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

export default Programme
