import { motion } from "framer-motion";


const About = () => {
  const timeline = [
    {
      year: "2025",
      title: "Software Developer Intern (Goal)",
      description:
        "Aiming to apply my full-stack skills in a dynamic tech environment and deliver scalable solutions.",
    },
    {
      year: "2024",
      title: "AWS Certified + Major Projects",
      description:
        "Completed AWS Cloud Support Certification and built real-time apps like an E-Commerce Platform and Blog App.",
    },
    {
      year: "2023",
      title: "Started Master's in CS @ Texas Tech",
      description:
        "Focusing on Cloud, Distributed Systems, and Software Engineering with practical hands-on projects.",
    },
    {
      year: "2019 - 2023",
      title: "B.Tech in ECE - Malla Reddy College",
      description:
        "Led the Data Leakage Detection System project. Developed a passion for full-stack development and UX design.",
    },
  ];

  return (
    <div className="w-full h-screen bg-black text-white px-4 py-8 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>

        <img
          src="/images/profile.png"
          alt="Lokeshwar Reddy"
          className="w-32 h-32 mx-auto rounded-full mb-6 border-4 border-blue-500"
        />

        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto text-center mb-12 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          I'm a Full-Stack Developer with a passion for creating intuitive, scalable applications using modern tech like React, Node.js, and AWS. I thrive in collaborative environments and love turning ideas into clean, user-centered solutions.
        </motion.p>

        <div className="max-w-4xl mx-auto border-l border-gray-700 pl-6 md:pl-8 space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-blue-500" />
              <h4 className="text-xl font-bold text-blue-400 mb-1">{item.year}</h4>
              <h5 className="text-lg font-semibold mb-1">{item.title}</h5>
              <p className="text-sm text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;