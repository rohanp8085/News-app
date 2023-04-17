import Navbar from "./Components/Navbar"
import { NewsProvider } from "./Context/Allnews/NewsContext"
import { IplProvider } from "./Context/Ipl/IplContext"
import { PoliticsProvider } from "./Context/Politic/PoliticsContext"
import { BusinessProvider } from "./Context/business/BusinessContext"
import Business from "./Pages/Business"
import Home from "./Pages/Home"
import Ipl from "./Pages/Ipl"
import Politics from "./Pages/politics"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




function App() {

  return (
    <Router>
      <NewsProvider>
        <BusinessProvider>
          <PoliticsProvider>
            <IplProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/Bussiness" element={<Business />} />

                <Route path="/Politics" element={<Politics />} />

                <Route path="/Ipl" element={<Ipl />} />
              </Routes>
            </IplProvider>
          </PoliticsProvider>
        </BusinessProvider>
      </NewsProvider>
    </Router>

  )
}

export default App
