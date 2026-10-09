
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

const ResearchCard = ({ article }) => {
  const imageUrl = article.image || FALLBACK_IMAGE;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = FALLBACK_IMAGE;
          }}
        />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {(article.tags || ["Uncategorized"]).map((tag) => (
            <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-3">{article.authors || "Unknown authors"}</p>

        <p className="text-sm text-gray-500 mb-4 line-clamp-3 flex-grow">
          {article.description || article.abstract || "No description available"}
        </p>

        <div className="mt-auto">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>
              {article.journal || "Unpublished"} • {article.date || "No date"}
            </span>
            <span>
              {article.reads || 0} reads • {article.citations || 0} citations
            </span>
          </div>

          <div className="mt-4 flex space-x-3">
            <button className="text-blue-600 hover:text-blue-800 font-medium">Download</button>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Cite</button>
            {article.collaborators?.length > 0 && (
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Collaborators ({article.collaborators.length})
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;