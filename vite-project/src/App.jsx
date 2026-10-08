
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import AddResearch from "./pages/AddResearch";
import AddPublishedResearch from "./pages/AddPublishedResearch";
import About from "./pages/About"; 
import Privacy from './pages/Privacy';
import Contact from "./pages/Contact";
import VerifyEmail from "./pages/VerifyEmail";
import AddResearchForm from "./pages/AddResearchForm";
import ChatBox from "./pages/ChatBox";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-research" element={<AddResearch />} />
        <Route path="/add-research/published" element={<AddPublishedResearch />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/research-form" element={<AddResearchForm />} />
        <Route path="/chatbox" element={<ChatBox/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
