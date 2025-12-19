"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"
// import qrCodeWhatsapp from "../assets/Images/a"

function RejoindreSection() {
  const [showQR, setShowQR] = useState(false)

  return (
    <section id="rejoindre" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center animate-slideUp">
            <div className="inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full mb-6">
              <MessageCircle className="inline-block mr-2" size={24} />
              <span className="font-bold text-lg">Rejoignez notre Groupe WhatsApp</span>
            </div>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Pour recevoir toutes les informations sur les activités et événements organisés par<strong>l'OPPJ</strong>de ta paroisse, intégrez notre groupe WhatsApp en
              cliquant sur le bouton ci-dessous.
            </p>

            {/* Flip Card Container */}
            <div className="max-w-md mx-auto">
              <div className={`flip-card ${showQR ? "flipped" : ""}`}>
                <div className="flip-card-inner" style={{ minHeight: "70px" }}>
                  {/* Front - Button */}
                  <div className="flip-card-front">
                    <div className="flex flex-col gap-4 items-center justify-center h-full">
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
                  </div>

                  {/* Back - QR Code */}
                  {/* <div className="flip-card-back">
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border-4 border-green-500 h-full flex flex-col items-center justify-center">
                      <img
                        src={qrCodeWhatsapp || "/placeholder.svg"}
                        alt="QR Code WhatsApp"
                        className="w-48 h-48 mb-4 rounded-lg shadow-lg"
                      />
                      <p className="text-sm text-gray-700 font-semibold mb-4">Scannez ce code avec votre téléphone</p>
                      <button
                        onClick={() => setShowQR(false)}
                        className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300 font-semibold"
                      >
                        Retour
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RejoindreSection
