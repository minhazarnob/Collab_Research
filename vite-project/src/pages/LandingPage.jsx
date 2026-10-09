import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import WelcomeBanner from "../components/landing/WelcomeBanner";
import TabNavigation from "../components/landing/TabNavigation";
import ResearchTab from "../components/landing/tabs/ResearchTab";
import CollaboratorTab from "../Components/landing/tabs/CollaboratorTab";
import GroupsTab from "../components/landing/tabs/GroupsTab";
import EventsTab from "../components/landing/tabs/EventsTab";
import ToolsTab from "../components/landing/tabs/ToolsTab";
import AnalyticsTab from "../components/landing/tabs/AnalyticsTab";

import {
  Researchers as sampleResearchers,
  ResearchArticles,
  sampleEvents,
  researchTools,
  analyticsData,
} from "../utils/landing";

const Landing = () => {
  // ট্যাব ও নোটিফিকেশন
  const [activeTab, setActiveTab] = useState("research");
  const [unreadCount] = useState(2);

  // মেসেজ মডাল
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedResearcher, setSelectedResearcher] = useState(null);

  // গ্রুপ
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [groups, setGroups] = useState([]);
  const [activeGroup, setActiveGroup] = useState(null);
  const [groupMessages, setGroupMessages] = useState([]);
  const [groupMessage, setGroupMessage] = useState("");

  // সক্রিয় গ্রুপ বদলালে মেসেজ লোড
  useEffect(() => {
    setGroupMessages(activeGroup ? activeGroup.messages || [] : []);
  }, [activeGroup]);

  const handleSendMessage = () => {
    if (!groupMessage.trim() || !activeGroup) return;

    const newMessage = {
      id: Date.now(),
      sender: "You",
      content: groupMessage,
      timestamp: new Date().toISOString(),
    };

    setGroupMessages((prev) => [...prev, newMessage]);

    const updatedGroups = groups.map((group) =>
      group.id === activeGroup.id
        ? { ...group, messages: [...group.messages, newMessage] }
        : group
    );

    setGroups(updatedGroups);
    setGroupMessage("");
  };

  const handleFileUpload = (e) => {
    if (!activeGroup) return;

    const files = Array.from(e.target.files);
    const newFiles = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      type: file.type,
      uploadedBy: "Badol Hossen",
      uploadedAt: new Date().toISOString(),
    }));

    const updatedGroups = groups.map((group) =>
      group.id === activeGroup.id
        ? { ...group, files: [...group.files, ...newFiles] }
        : group
    );

    setGroups(updatedGroups);
    setActiveGroup((prev) => ({ ...prev, files: [...prev.files, ...newFiles] }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 py-6 pb-20">
        <WelcomeBanner
          name="Badol Hossen"
          unreadCount={unreadCount}
          updatesCount={ResearchArticles.length}
        />

        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "research" && <ResearchTab articles={ResearchArticles} />}

        {activeTab === "collaborators" && (
          <CollaboratorTab
            researchers={sampleResearchers}
            onMessage={(id) => {
              setSelectedResearcher(id);
              setShowMessageModal(true);
            }}
          />
        )}

        {activeTab === "groups" && (
          <GroupsTab
            groups={groups}
            activeGroup={activeGroup}
            setActiveGroup={setActiveGroup}
            groupMessages={groupMessages}
            groupMessage={groupMessage}
            setGroupMessage={setGroupMessage}
            researchers={sampleResearchers}
            onCreateGroup={() => setShowCreateGroupModal(true)}
            onSendMessage={handleSendMessage}
            onFileUpload={handleFileUpload}
          />
        )}

        {activeTab === "events" && <EventsTab events={sampleEvents} />}

        {activeTab === "tools" && <ToolsTab tools={researchTools} />}

        {activeTab === "analytics" && <AnalyticsTab data={analyticsData} />}
      </main>
    </div>
  );
};

export default Landing;