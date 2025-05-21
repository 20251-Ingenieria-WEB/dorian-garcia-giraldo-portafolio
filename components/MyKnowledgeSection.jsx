
import KnowledgeItem from './KnowledgeItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faObjectGroup, faCameraRetro, faBullhorn } from '@fortawesome/free-solid-svg-icons';

const MyKnowledgeSection = () => {
  return (
    <section className="my-knowledge mb-16">
      <h2 className="text-2xl text-gray-800 font-bold mb-4 text-center">My Knowledge</h2>
      <p className="section-description text-gray-700 leading-relaxed mb-8">
        Frontend: React, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS
        <br />
        Backend: Node.js, Express, RESTful APIs (optional)
        <br />
        Tools: Git, GitHub, Vercel, Figma (for UI/UX collaboration)
        <br />
        Agile methodologies & teamwork.
      </p>
      <div className="knowledge-grid grid grid-cols-2 md:grid-cols-4 gap-5">
        <KnowledgeItem icon={faCode} title="Web Development" description="" />
        <KnowledgeItem icon={faObjectGroup} title="UI/UX Design" description="" />
        <KnowledgeItem icon={faCameraRetro} title="Photography" description="" />
        <KnowledgeItem icon={faBullhorn} title="Advertising" description="" />
      </div>
    </section>
  );
};

export default MyKnowledgeSection;