import {useState} from "react"
import Navbar from '../Components/Profile/Navbar';
import MainContent from '../Components/Profile/MainContent';
import ProfileHeader from '../Components/Profile/ProfileHeader';
import Collaboration from '../Components/Profile/Collaboration';

const About = () => {
    const [showCollaborationModal,setShowCollaborationModal] = useState(false)
    return (  
        <div className="min-h-screen bg-gray-50 m-2">
            <Navbar/>
            <ProfileHeader setShowCollaborationModal={setShowCollaborationModal} />
            <MainContent setShowCollaborationModal={setShowCollaborationModal} />
            <Collaboration
                showCollaborationModal={showCollaborationModal}
                setShowCollaborationModal={setShowCollaborationModal}
            />
        </div>
    );
};

export default About;