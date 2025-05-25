
import EducationItem from './EducationItem';

const EducationSection = () => {
  return (
    <section className="education mb-16">
      <h2 className="text-2xl text-gray-800 font-bold mb-4 text-center">Education</h2>
      <p className="section-description text-gray-800 leading-relaxed mb-8">Realized Studies.</p>
      <div className="education-list flex flex-col gap-6">
        <EducationItem
          title="Sena"
          degree="X ray technology"
          duration="2000 - 2003"
          description="This degree qualifies professionals to perform and assist in medical diagnostic imaging procedures, such as X-rays, MRIs, and CT scans. Graduates are trained in patient care, equipment operation, image processing, and radiation safety protocols. They work closely with radiologists and healthcare teams to ensure accurate diagnostics while maintaining high-quality standards and patient safety.

."
        />
        <EducationItem
          title="Universidad de Antioquia"
          degree="Ingenieria de sistemas"
          duration="2021 - 2025"
          description="Relevant coursework: Algorithms, Data Structures, Web Development, Databases."
        />
        <EducationItem
          title="Certificate IA Development Bootcamp"
          duration="2025"
          description="Neural network training learning to solve specific problems affecting the community."
        />
      </div>
    </section>
  );
};

export default EducationSection;