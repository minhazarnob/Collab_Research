
import { useState } from "react";
import { Search } from "lucide-react";
import ToolCard from "../cards/ToolCard";

const ToolsTab = ({ tools }) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const quickFilters = ["Literature Search", "Writing", "Bioinformatics", "Machine Learning", "Publications"];

  const filtered = tools.filter((tool) => {
    const matchesQuery =
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  const categories = Array.from(new Set(filtered.map((tool) => tool.category)));

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search tools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", ...quickFilters].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category === "All" ? "All Categories" : category}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-12">
        {categories.length === 0 && (
          <p className="text-center text-gray-500">No tools found.</p>
        )}
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered
                .filter((tool) => tool.category === category)
                .map((tool) => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsTab;