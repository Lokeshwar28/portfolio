const SkillCard = ({ icon, label }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow text-white text-center hover:shadow-blue-500/30 transition duration-300">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default SkillCard;
