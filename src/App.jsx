import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Navbar, Tech, Works, StarsCanvas } from "./components"

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <About />
        <Experience />
        <Works />
        <div className="relative z-0 bg-black">
          <Tech />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
