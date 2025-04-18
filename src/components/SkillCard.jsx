const SkillCard = ({ icon, label }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow text-center hover:shadow-blue-500/30 hover:scale-105 transform transition duration-300">
      <div className="text-3xl mb-2 text-black dark:text-white">{icon}</div>
      <div className="text-sm font-medium text-gray-700 dark:text-gray-200">{label}</div>
    </div>
  );
};

export default SkillCard;
