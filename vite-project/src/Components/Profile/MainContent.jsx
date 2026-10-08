import {useState} from 'react';
import {profileData} from "../../utils/profiles";


const MainContent = ({ setShowCollaborationModal }) => {
    const [activeTab, setActiveTab] = useState("publications");

    return (
        <div className="mt-8">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("publications")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "publications" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                Publications
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "projects" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                Research Projects
              </button>
              <button
                onClick={() => setActiveTab("collaborators")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "collaborators" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                Collaborators
              </button>
              <button
                onClick={() => setActiveTab("activity")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "activity" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                Activity
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "publications" && (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Journal</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Citations</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DOI</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {profileData.publications.map((pub) => (
                        <tr key={pub.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-normal max-w-xs text-sm font-medium text-gray-900">
                            {pub.title}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pub.journal}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pub.year}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pub.citations}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">
                            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                              View
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-200 text-right">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View All Publications →
                  </button>
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profileData.projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Start Date</p>
                        <p className="text-sm font-medium">{project.startDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">End Date</p>
                        <p className="text-sm font-medium">{project.endDate}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-500">Funding</p>
                        <p className="text-sm font-medium">{project.funding}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-3">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View Details
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                        Team Members
                      </button>
                    </div>
                  </div>
                ))}
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-blue-300 transition-colors">
                  <button className="text-blue-600 hover:text-blue-800 flex flex-col items-center">
                    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Add New Project</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === "collaborators" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {profileData.recentCollaborators.map((collaborator, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm p-6 flex items-center space-x-4 hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <img className="w-16 h-16 rounded-full object-cover border-2 border-blue-100" src={collaborator.avatar} alt={collaborator.name} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{collaborator.name}</h3>
                      <p className="text-sm text-gray-500">{collaborator.institution}</p>
                      <div className="mt-2 flex space-x-3">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View Profile
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-blue-300 transition-colors">
                  <button 
                    onClick={() => setShowCollaborationModal(true)}
                    className="text-blue-600 hover:text-blue-800 flex flex-col items-center"
                  >
                    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Add Collaborator</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === "activity" && (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {profileData.activities.map((activity) => (
                    <li key={activity.id} className="p-6 hover:bg-gray-50">
                      <div className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {activity.type === 'Conference' ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              )}
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            {activity.type} • {activity.location} • {new Date(activity.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="px-6 py-4 border-t border-gray-200 text-right">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View All Activity →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      

    );
};

export default MainContent;