
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Landing from "./Components/Landing";
import Profile from "./Components/Profile";
import AddResearch from "./Components/AddResearch";
import AddPublishedResearch from "./Components/AddPublishedResearch";
import About from "./Components/About"; 
import Privacy from './Components/Privacy';
import Contact from './Components/Contact';
import VerifyEmail from "./Components/VerifyEmail";
import AddResearchForm from "./Components/AddResearchForm";
import TermsComponent from "./Components/Terms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-research" element={<AddResearch />} />
        <Route path="/add-research/published" element={<AddPublishedResearch />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/add-research" element={<AddResearchForm />} />
        <Route path="/terms" element={<TermsComponent />} /> {/* ✅ Added About Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
