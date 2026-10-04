import HeroSection from '../Components/About/HeroSection';
import OurIdeas from '../Components/About/OurIdeas';
import Missions from '../Components/About/Missions';
import GrouthResults from '../Components/About/GrouthResults';
import Investors from "../Components/About/OurTeam";
import Affiliations from './../Components/About/Affiliations';
import Footer from "./../Components/About/Footer";
import Navbar from "../Components/Navbar";
import OurTeam from '../Components/About/OurTeam';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar/>
            <HeroSection/>
            <OurIdeas/>
            <Missions/>
            <GrouthResults/>
            <OurTeam/>
            <Investors/>
            <Affiliations/>
            <Footer/>
        </div>
    );
};

export default About;