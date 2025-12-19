import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Accueil from "./Pages/Accueil"
import Programme from "./Pages/Programme"
import Bureau from "./Pages/Bureau"
import Activites from "./Pages/Activites"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/bureau" element={<Bureau />} />
            <Route path="/activites" element={<Activites />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
