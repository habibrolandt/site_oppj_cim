"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import logoOppj from "../assets/Images/logo1.jpg"

function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path ? "bg-blue-700" : ""
  }

  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logoOppj || "/placeholder.svg"}
              alt="Logo OPPJ"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-md"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold">OPPJ-CIM</h1>
              <p className="text-xs text-blue-100 hidden md:block">Office Paroissial de la Pastorale des Jeunes</p>
            </div>
          </div>

          {/* Bouton Menu Mobile */}
          <button className="md:hidden z-50 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg ${isActive("/")} hover:bg-blue-700 transition-all duration-300`}
            >
              Accueil
            </Link>
            <Link
              to="/programme"
              className={`px-4 py-2 rounded-lg ${isActive("/programme")} hover:bg-blue-700 transition-all duration-300`}
            >
              Programme
            </Link>
            <Link
              to="/bureau"
              className={`px-4 py-2 rounded-lg ${isActive("/bureau")} hover:bg-blue-700 transition-all duration-300`}
            >
              Membres du Bureau
            </Link>
            {/* <Link
              to="/activites"
              className={`px-4 py-2 rounded-lg ${isActive("/activites")} hover:bg-blue-700 transition-all duration-300`}
            >
              Activités
            </Link> */}
          </nav>
        </div>

        {/* Menu Mobile */}
        <nav
          className={`${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col space-y-2 pb-4">
            <li>
              <Link
                to="/"
                className={`block px-4 py-3 rounded-lg ${isActive("/")} hover:bg-blue-700 transition-all duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/programme"
                className={`block px-4 py-3 rounded-lg ${isActive("/programme")} hover:bg-blue-700 transition-all duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Programme
              </Link>
            </li>
            <li>
              <Link
                to="/bureau"
                className={`block px-4 py-3 rounded-lg ${isActive("/bureau")} hover:bg-blue-700 transition-all duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Bureau
              </Link>
            </li>
            {/* <li>
              <Link
                to="/activites"
                className={`block px-4 py-3 rounded-lg ${isActive("/activites")} hover:bg-blue-700 transition-all duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Activités
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
