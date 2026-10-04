
import { Link } from "react-router-dom";
import { FileText, NotebookPen, Mic } from "lucide-react";
import {Presentation, Plus, ArrowLeft} from "lucide-react";

const AddResearch = () => {
  const researchTypes = [
    {
      id: "published",
      title: "Published Research",
      description: "Articles, books etc.",
      icon: FileText,
      route: "/add-research/published"
    },
    {
      id: "preprint",
      title: "Preprint",
      description: "Draft or paper before peer review",
      icon: NotebookPen,
      route: "/add-research/preprint"
    },
    {
      id: "conference",
      title: "Conference Paper",
      description: "Add a conference paper",
      icon: Mic,
      route: "/add-research/conference"
    },
    {
      id: "presentation",
      title: "Presentation",
      description: "Add a presentation",
      icon: Presentation,
      route: "/add-research/presentation"
    },
    {
      id: "others",
      title: "Others",
      description: "Proposal, Method, Code etc",
      icon: Plus,
      route: "/add-research/others"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/landing" className="text-2xl font-bold text-orange-600">Collab Research</Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden"
            >
              <span className="text-gray-600 font-medium">
                {JSON.parse(localStorage.getItem("user"))?.firstName?.charAt(0) || 'U'}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-400">Add your research</h3>
          <p className="text-gray-600 text-lg font-medium">Select the type of research you want to add</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchTypes.map((type) => {
            const Icon = type.icon;

            return (
              <Link
                key={type.id}
                to={type.route}
                state={{ researchType: type.id }}
                className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-orange-600 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-gray-600 group-hover:text-orange-600 transition-colors">
                    <Icon className="w-10 h-10"/>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
                    {type.title}
                  </h3>

                  <p className="text-gray-600 text-lg font-normal">{type.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/landing"
            className="text-blue-800 hover:text-orange-600 text-xl font-medium inline-flex items-center"
          >
            <ArrowLeft className="h-5 w-5 mr-1 text-xl font-medium" />
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AddResearch;