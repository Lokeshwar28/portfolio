const SkillCard = ({ icon, label }) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow-md text-center hover:shadow-accent/30 hover:scale-105 transform transition duration-300 border border-gray-200 dark:border-gray-700 group">
      <div className="text-3xl mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <div className="text-sm font-medium text-gray-700 dark:text-gray-200 leading-tight">{label}</div>
    </div>
  );
};

export default SkillCard;
