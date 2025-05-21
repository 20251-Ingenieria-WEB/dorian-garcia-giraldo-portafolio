

const EducationItem = ({ title, degree, duration, description }) => {
  return (
    <div className="education-item bg-white p-6 rounded-md shadow-sm">
      <h3 className="text-xl text-gray-700 font-semibold mb-2">{title}</h3>
      {degree && <p className="degree text-gray-600 italic mb-1">{degree}</p>}
      <p className="duration text-gray-500 text-sm mb-3">{duration}</p>
      <p className="description text-gray-700 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default EducationItem;