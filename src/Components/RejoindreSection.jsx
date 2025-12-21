"use client"

import { MessageCircle } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import { useState } from "react"

function RejoindreSection() {
  const [showQR, setShowQR] = useState(false)

  return (
    <section
      id="rejoindre"
      className="py-20 bg-gradient-to-br from-blue-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* ===== WHATSAPP ===== */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center animate-slideUp">
            <div className="inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full mb-6">
              <MessageCircle className="inline-block mr-2" size={24} />
              <span className="font-bold text-lg">
                Rejoignez notre Groupe WhatsApp
              </span>
            </div>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Pour recevoir toutes les informations sur les activités et événements
              organisés par <strong>l'OPPJ</strong> de ta paroisse, intègre notre
              groupe WhatsApp en cliquant sur le bouton ci-dessous.
            </p>

            <a
              href="https://chat.whatsapp.com/GkCdKguBH1tHdQ0nhyWl57?mode=hqrt2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="mr-2" size={24} />
              Rejoindre le Groupe
            </a>
          </div>

          {/* ===== TIKTOK ===== */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center animate-slideUp">
            <div className="inline-block bg-black text-white px-6 py-3 rounded-full mb-6">
              <FaTiktok className="inline-block mr-2" size={22} />
              <span className="font-bold text-lg">
                Suivez-nous sur TikTok
              </span>
            </div>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Abonnez-vous au compte TikTok de <strong>l'OPPJ</strong> pour ne rien ratter sur nos différentes activitésDécouvre nos moments forts, célébration de messe, annonces.
            </p>

            <a
              href="https://tiktok.com/@paroisse.cur.imma" // 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaTiktok className="mr-2" size={22} />
              S’abonner au compte TikTok
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default RejoindreSection
