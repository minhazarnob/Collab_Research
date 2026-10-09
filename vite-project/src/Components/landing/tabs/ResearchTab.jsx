
import ResearchCard from "../cards/ResearchCard";

const ResearchTab = ({ articles }) => {
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sorted.map((article) => (
        <ResearchCard key={`${article.id}-${article.title}`} article={article} />
      ))}
    </div>
  );
};

export default ResearchTab;