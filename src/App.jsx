import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";



import Index from './pages/home.jsx'

function App() {
  

  return (
    <BrowserRouter>

      <Routes>
        
        <Route path="/" element={<Index />} />
     
      </Routes>

    </BrowserRouter>
  )
}

export default App
