
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const KnowledgeItem = ({ icon, title, description }) => {
  return (
    <div className="knowledge-item bg-white p-5 rounded-md shadow-sm text-center">
      <div className="icon text-yellow-500 text-3xl mb-3">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-lg text-gray-700 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default KnowledgeItem;