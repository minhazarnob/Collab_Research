
import CollaboratorCard from "../cards/CollaboratorCard";

const CollaboratorsTab = ({ researchers, onMessage }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {researchers.map((researcher) => (
        <CollaboratorCard
          key={researcher.id}
          researcher={researcher}
          onMessage={() => onMessage(researcher.id)}
        />
      ))}
    </div>
  );
};

export default CollaboratorsTab;