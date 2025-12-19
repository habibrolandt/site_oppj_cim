"use client"

import { Phone, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import presi from "../assets/Images/prési.jpg"
import fatim from "../assets/Images/fatim.jpg"
import franck from "../assets/Images/franck.jpg"
import dolla from "../assets/Images/dolla.jpg"
import romeo from "../assets/Images/romeo.jpg"
import kader from "../assets/Images/kader.jpg"
import lisa from "../assets/Images/lisa.jpg"
import aristide from "../assets/Images/aristide.jpg"
import gervais from "../assets/Images/gervais.jpg"
import merveille from "../assets/Images/merveille.jpg"
import alexA from "../assets/Images/alexA.jpg"
import innocent from "../assets/Images/innocent.jpg"
import yedidia from "../assets/Images/yedidia.jpg"

function Bureau() {
  const [expandedMembre, setExpandedMembre] = useState(null)

  const membres = [
    {
      id: 1,
      nom: "DOLLO",
      prenom: "JEAN MARC",
      poste: "Aumônier des jeunes",
      photo: null,
      phone: "+225 07 08 29 34 93",
      adjoints: [],
    },
    {
      id: 2,
      nom: "KOUAKOU",
      prenom: "KOTCHIN JOEL",
      poste: "Président de l'OPPJ",
      photo: presi,
      phone: "+225 07 09 62 97 31",
      adjoints: [
        {
          nom: "TOKPA",
          prenom: "ROSETTE FATIM",
          poste: "1ère Vice-Présidente en charge de l'administration",
          photo: fatim,
          phone: "+225 05 84 75 54 18",
        },
        {
          nom: "KOUAKOU",
          prenom: "ROMEO",
          poste: "2ème Vice-Président en charge de l'organisation",
          photo: romeo,
          phone: "+225 07 08 21 37 96",
        },
        {
          nom: "KARIDIOULA",
          prenom: "ISSOUF",
          poste: "3ème Vice-Président en charge de la formation et de l'insertion socio-professionnelle",
          photo: null,
          phone: "+225 07 47 82 89 24",
        },
      ],
    },
    {
      id: 6,
      nom: "ADJE",
      prenom: "KAN KONAN",
      poste: "Secrétaire Général",
      photo: null,
      phone: "+225 07 57 60 51 32",
      adjoints: [
        {
          nom: "TANOH",
          prenom: "YAO CYRILLE ALEX",
          poste: "Secrétaire Adjoint 1",
          photo: null,
          phone: "+225 07 57 60 51 32",
        },
        {
          nom: "BIGUENE",
          prenom: "MERVEILLE",
          poste: "Secrétaire Adjoint 2",
          photo: merveille,
          phone: "+225 07 99 00 52 45",
        },
      ],
    },
    {
      id: 7,
      nom: "AMON",
      prenom: "ARISTIDE",
      poste: "Responsable Communication",
      photo: aristide,
      phone: "+225 07 47 48 88 01",
      adjoints: [
        {
          nom: "TUO",
          prenom: "HABIB ROLAND",
          poste: "Responsable communication et relations extérieures Adjoint 1",
          photo: null,
          phone: "+225 01 03 81 16 91",
        },
        {
          nom: "VANIE",
          prenom: "GERVAIS",
          poste: "Responsable communication et relations extérieures Adjoint 2",
          photo: gervais,
          phone: "+225 07 57 53 05 20",
        },
      ],
    },
    {
      id: 8,
      nom: "DOLLA",
      prenom: "ARSENE",
      poste: "Secrétaire à l’organisation",
      photo: dolla,
      phone: "+225 07 07 05 05 80",
      adjoints: [
        {
          nom: "KOUASSI",
          prenom: "ISAAC N’GUESSAN",
          poste: "Secrétaire à l’organisation Adjoint 1",
          photo: null,
          phone: "+225 07 57 70 34 32",
        },
        {
          nom: "KOFFI",
          prenom: "KADER",
          poste: "Secrétaire à l’organisation Adjoint 2",
          photo: kader,
          phone: "+225 07 07 80 01 06",
        },
        {
          nom: "BRO",
          prenom: "LARISSA",
          poste: "Secrétaire à l’organisation Adjoint 3",
          photo: null,
          phone: "+225 07 77 67 02 67",
        },
      ],
    },
    {
      id: 9,
      nom: "YAO",
      prenom: "ANNE LISA",
      poste: "Trésorière Générale",
      photo: lisa,
      phone: "+225 07 98 73 34 12",
      adjoints: [
        {
          nom: "BIGUENE",
          prenom: "YEDIDA SULPICIA",
          poste: "Trésorière Adjointe",
          photo: yedidia,
          phone: "+225 07 91 70 12 57",
        },
      ],
    },
    {
      id: 10,
      nom: "TANOH",
      prenom: "FRANCK",
      poste: "Secrétaire en charge de la spiritualité",
      photo: franck,
      phone: "+225 05 76 31 45 32",
      adjoints: [
        {
          nom: "ASSOUMOU",
          prenom: "ALEX",
          poste: "Secrétaire en charge de la spiritualité Adjoint ",
          photo: alexA,
          phone: "+225 05 06 92 99 24",
        },
      ],
    },
    {
      id: 11,
      nom: "KOFFI",
      prenom: "Brou Jean-Kader",
      poste: "Chargé de la Santé du bureau de l'OPPJ",
      photo: kader,
      phone: "",
      adjoints: [],
    },
    {
      id: 12,
      nom: "KOUASSI",
      prenom: "INNOCENT",
      poste: "Commissaire aux comptes",
      photo: innocent,
      phone: "",
      adjoints: [],
    },
  ]

  const toggleAdjoints = (membreId) => {
    setExpandedMembre(expandedMembre === membreId ? null : membreId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 py-12">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12 animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Membres du Bureau</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rencontrez l'équipe dévouée qui coordonne les activités Jeunes sur notre paroisse
          </p>
        </div>

        {/* Grille de membres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {membres.map((membre, index) => (
            <div
              key={membre.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 animate-zoomIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo */}
              <div className="relative h-64 bg-gradient-to-br from-green-400 to-yellow-400 overflow-hidden">
                {membre.photo ? (
                  <img
                    src={membre.photo || "/placeholder.svg"}
                    alt={`${membre.prenom} ${membre.nom}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <p className="text-gray-400 text-center px-4 font-medium">Aucune image disponible pour l'instant</p>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {membre.poste}
                  </span>
                </div>
              </div>

              {/* Informations */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {membre.prenom} {membre.nom}
                </h3>
                <p className="text-green-700 font-semibold mb-4">{membre.poste}</p>

                <div className="space-y-3">
                  {membre.phone && (
                    <div className="flex items-center text-gray-600">
                      <Phone size={18} className="mr-3 text-green-600" />
                      <a href={`tel:${membre.phone}`} className="hover:text-green-600 transition-colors text-sm">
                        {membre.phone}
                      </a>
                    </div>
                  )}
                </div>

                {membre.adjoints && membre.adjoints.length > 0 && (
                  <div className="mt-4">
                    <button
                      onClick={() => toggleAdjoints(membre.id)}
                      className="w-full flex items-center justify-between bg-green-50 hover:bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      <span>Voir les adjoints ({membre.adjoints.length})</span>
                      {expandedMembre === membre.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedMembre === membre.id ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="space-y-3">
                        {membre.adjoints.map((adjoint, adjIndex) => (
                          <div
                            key={adjIndex}
                            className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-lg p-4 border-l-4 border-yellow-500 animate-slideUp"
                            style={{ animationDelay: `${adjIndex * 0.1}s` }}
                          >
                            <div className="flex items-start gap-3">
                              {/* Photo adjoint */}
                              {adjoint.photo ? (
                                <img
                                  src={adjoint.photo || "/placeholder.svg"}
                                  alt={`${adjoint.prenom} ${adjoint.nom}`}
                                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500"
                                />
                              ) : (
                                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border-2 border-yellow-500">
                                  <span className="text-[8px] text-gray-400 text-center px-1">Aucune image</span>
                                </div>
                              )}

                              {/* Informations adjoint */}
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-800 text-sm">
                                  {adjoint.prenom} {adjoint.nom}
                                </h4>
                                <p className="text-xs text-yellow-600 font-semibold mb-2">{adjoint.poste}</p>
                                {adjoint.phone && (
                                  <div className="flex items-center text-gray-600">
                                    <Phone size={14} className="mr-2 text-green-600" />
                                    <a
                                      href={`tel:${adjoint.phone}`}
                                      className="text-xs hover:text-green-600 transition-colors"
                                    >
                                      {adjoint.phone}
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bureau
