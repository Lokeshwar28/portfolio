import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMemo } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheck,
} from "react-icons/fa";
import SEO from "../components/SEO";

const Experience = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Memoize experiences array to prevent recreating on each render
  const experiences = useMemo(
    () => [
      {
        title: "Software Engineer, Full Stack",
        company: "JPMorgan Chase",
        location: "Remote",
        duration: "Aug 2024 - Present",
        type: "Full-time",
        description:
          "Architecting and delivering microservices-based financial workflow platform processing 50,000+ daily transactions with focus on performance optimization and scalable system design.",
        achievements: [
          "Architected microservices platform serving 300+ operations analysts, processing 50,000+ daily reconciliation transactions with 99.8% uptime SLA",
          "Reduced critical API latency by 40% through query optimization, Redis caching, and database indexing strategy",
          "Engineered 15+ RESTful endpoints with comprehensive validation, reducing production incidents by 35% quarter-over-quarter",
          "Led migration to event-driven architecture with Kafka, improving report generation speed by 60%",
          "Built React dashboards with real-time data visualization, reducing manual data extraction by 80%",
          "Increased unit test coverage from 45% to 78%, implementing integration tests that caught 12 critical defects pre-production",
          "Containerized 8 microservices using Docker and AWS (ECS, EC2, Lambda), reducing deployment time from 2 hours to 15 minutes",
          "Mentored 2 junior developers on Spring Boot best practices and microservices patterns",
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "React",
          "TypeScript",
          "PostgreSQL",
          "Redis",
          "Kafka",
          "Docker",
          "AWS (ECS, EC2, Lambda)",
          "CloudFormation",
          "Microservices",
        ],
      },
      {
        title: "Full Stack Developer (Graduate Assistant)",
        company: "Texas Tech University",
        location: "Lubbock, TX",
        duration: "Sep 2023 - Jul 2024",
        type: "Full-time",
        description:
          "Owned full-stack development of internal IT service management platform supporting 500+ daily campus support tickets with focus on database optimization and reporting.",
        achievements: [
          "Developed IT service management platform supporting 500+ daily campus support tickets",
          "Refactored 15+ complex SQL queries with proper indexing, achieving 35% performance improvement",
          "Reduced database CPU utilization by 20% through query execution plan optimization",
          "Implemented automated data validation workflows saving 12 hours weekly",
          "Improved report accuracy from 87% to 99% through data quality improvements",
          "Collaborated with IT management through weekly sprint cycles in Agile environment",
        ],
        technologies: [
          "JavaScript",
          "PHP",
          "SQL Server",
          "HTML5",
          "CSS3",
          "Git",
          "Agile/Scrum",
        ],
      },
      {
        title: "Software Engineer Intern",
        company: "Citi Bank",
        location: "India",
        duration: "May 2022 - Jun 2023",
        type: "Internship",
        description:
          "Developed secure transaction processing APIs and customer-facing React components for retail banking applications with focus on security and performance.",
        achievements: [
          "Developed secure transaction processing APIs using Java and Spring Boot with OAuth 2.0 authentication",
          "Built customer-facing React components for transaction history and fund transfer workflows",
          "Optimized batch reconciliation queries processing 100,000+ daily transactions",
          "Reduced query execution time from 8 minutes to 90 seconds through indexed views",
          "Contributed to Agile ceremonies and peer code reviews focused on security best practices",
          "Established JUnit test suite achieving 70% code coverage, uncovering 5 edge-case bugs before production",
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "React",
          "OAuth 2.0",
          "SQL",
          "Axios",
          "JUnit",
          "Agile",
        ],
      },
    ],
    [],
  );

  // Individual experience card component with its own intersection observer
  const ExperienceCard = ({ experience }) => {
    const [cardRef, cardInView] = useInView({
      threshold: 0.2,
      triggerOnce: true,
    });

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={cardInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 dark:border-slate-700/50 hover:shadow-neon transition-all duration-300">
          {/* Experience Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-accent to-highlight rounded-xl text-white">
                  <FaBriefcase className="text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-textPrimary">
                    {experience.title}
                  </h3>
                  <p className="text-lg text-accent dark:text-highlight font-semibold">
                    {experience.company}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-slate-600 dark:text-textSecondary mb-4">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-highlight" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-accent" />
                  <span>{experience.duration}</span>
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-accent/10 to-highlight/10 text-accent dark:text-highlight rounded-full text-sm font-medium border border-accent/20">
                  {experience.type}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-lg text-slate-700 dark:text-textSecondary leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Key Achievements - Simplified animation */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Key Achievements
            </h4>
            <motion.div
              className="grid md:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={cardInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {experience.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/60 dark:bg-secondary/60 rounded-xl border border-accent/20"
                >
                  <FaCheck className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-textSecondary">
                    {achievement}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Technologies Used - Simplified animation */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Technologies & Skills
            </h4>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={cardInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-accent/10 to-highlight/10 text-accent dark:text-highlight px-4 py-2 rounded-lg font-medium border border-accent/30 hover:scale-105 transition-transform duration-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <SEO
        title="Experience - Lokeshwar Reddy"
        description="3+ years of professional software engineering experience at JPMorgan Chase, Texas Tech University, and Citi Bank. Specialized in full-stack development, microservices architecture, and financial systems."
        keywords="JPMorgan Chase, Citi Bank, Texas Tech University, Software Engineer, Full Stack Developer, Microservices, Java, Spring Boot, React, Financial Systems"
      />

      <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 dark:from-primary dark:via-secondary dark:to-tertiary px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-500">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent via-highlight to-teal-500 bg-clip-text text-transparent mb-4">
              Professional Experience
            </h2>
            <motion.div
              className="absolute -inset-4 bg-glass backdrop-blur-xs rounded-2xl border border-white/10 shadow-glass-inset -z-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          <p className="text-xl text-slate-600 dark:text-textSecondary max-w-3xl mx-auto leading-relaxed">
            💼 3+ years building high-volume financial systems and scalable web
            applications
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((experience, expIndex) => (
            <ExperienceCard
              key={expIndex}
              experience={experience}
              expIndex={expIndex}
            />
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto bg-white/60 dark:bg-tertiary/60 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 dark:border-slate-700/50">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-textPrimary mb-4">
              Currently at JPMorgan Chase
            </h3>
            <p className="text-slate-600 dark:text-textSecondary leading-relaxed">
              Building scalable microservices and financial systems that process
              over 50,000 daily transactions. Passionate about performance
              optimization, clean architecture, and mentoring junior developers.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Experience;
