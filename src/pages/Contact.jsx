import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import { createPersonSchema } from "../utils/schemaHelpers";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formRef, formInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formspreeUrl =
        import.meta.env.VITE_FORMSPREE_URL || "https://formspree.io/f/xblgprak";
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "gummireddy2808@gmail.com",
      link: "mailto:gummireddy2808@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+1 (469) 554-9775",
      link: "tel:+14695549775",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "USA",
      link: null,
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "lokesh-reddy-g",
      link: "https://www.linkedin.com/in/lokesh-reddy-g/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "Lokeshwar28",
      link: "https://github.com/Lokeshwar28",
    },
  ];

  // Structured data for SEO
  const contactSchema = createPersonSchema({
    name: "Lokeshwar Reddy",
    jobTitle: "Software Engineer at JPMorgan Chase",
    email: "gummireddy2808@gmail.com",
    url: window.location.origin,
    location: "Dallas, TX, USA",
    sameAs: [
      "https://github.com/Lokeshwar28",
      "https://www.linkedin.com/in/lokesh-reddy-g/",
    ],
    description:
      "Full-stack software engineer specializing in microservices architecture and high-volume financial systems. Passionate about building scalable, efficient solutions.",
  });

  return (
    <>
      <StructuredData type="person" data={contactSchema} />
      <SEO
        title="Contact - Lokeshwar Reddy"
        description="Get in touch with Lokeshwar Reddy for collaboration opportunities, project discussions, or any questions about full-stack development."
        keywords="Contact Lokeshwar Reddy, Hire Full-Stack Developer, React Developer Contact, Node.js Developer"
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
              Let&apos;s Connect
            </h2>
            <motion.div
              className="absolute -inset-4 bg-glass backdrop-blur-xs rounded-2xl border border-white/10 shadow-glass-inset -z-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          <p className="text-xl text-slate-600 dark:text-textSecondary max-w-3xl mx-auto leading-relaxed">
            📬 Ready to collaborate? Drop me a message and let&apos;s build
            something amazing together!
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 dark:border-slate-700/50">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-textPrimary mb-8 text-center">
                Get In Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-highlight rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-textPrimary">
                        {info.label}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent dark:text-highlight hover:underline transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-600 dark:text-textSecondary">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 dark:border-slate-700/50">
              <h4 className="text-xl font-bold text-slate-900 dark:text-textPrimary mb-6 text-center">
                Quick Connect
              </h4>

              <div className="flex justify-center space-x-6">
                {[
                  {
                    icon: <FaGithub />,
                    href: "https://github.com/Lokeshwar28",
                    color: "hover:text-accent",
                  },
                  {
                    icon: <FaLinkedin />,
                    href: "https://www.linkedin.com/in/lokesh-reddy-g/",
                    color: "hover:text-highlight",
                  },
                  {
                    icon: <FaEnvelope />,
                    href: "mailto:gummireddy2808@gmail.com",
                    color: "hover:text-accent",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-100 dark:bg-secondary rounded-full flex items-center justify-center text-slate-600 dark:text-textSecondary ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 dark:border-slate-700/50"
          >
            <h3 className="text-3xl font-bold text-slate-800 dark:text-textPrimary mb-8 text-center">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  className="block text-sm font-medium text-slate-700 dark:text-textSecondary mb-2"
                  htmlFor="name"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-secondary/50 backdrop-blur-sm border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent dark:text-white ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600"
                    }`}
                    placeholder="Your full name"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                      ⚠️
                    </span>
                  )}
                </div>
                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-2 text-sm text-red-500 flex items-center gap-1"
                    role="alert"
                  >
                    <span>⚠</span>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  className="block text-sm font-medium text-slate-700 dark:text-textSecondary mb-2"
                  htmlFor="email"
                >
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-secondary/50 backdrop-blur-sm border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent dark:text-white ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600"
                    }`}
                    placeholder="your.email@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                      ⚠️
                    </span>
                  )}
                </div>
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-2 text-sm text-red-500 flex items-center gap-1"
                    role="alert"
                  >
                    <span>⚠</span>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label
                  className="block text-sm font-medium text-slate-700 dark:text-textSecondary mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject")}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-secondary/50 backdrop-blur-sm border-2 border-slate-300 dark:border-slate-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  className="block text-sm font-medium text-slate-700 dark:text-textSecondary mb-2"
                  htmlFor="message"
                >
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows="5"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-secondary/50 backdrop-blur-sm border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent resize-none dark:text-white ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600"
                    }`}
                    placeholder="Tell me about your project or just say hello!"
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <span className="absolute right-3 top-3 text-red-500">
                      ⚠️
                    </span>
                  )}
                </div>
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-2 text-sm text-red-500 flex items-center gap-1"
                    role="alert"
                  >
                    <span>⚠</span>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-accent to-highlight text-white font-semibold rounded-xl shadow-lg hover:shadow-neon transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed touch-target"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                      role="status"
                      aria-label="Sending message"
                    />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <span>🚀</span>
                  </div>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/50 border-2 border-green-400 dark:border-green-500 text-green-700 dark:text-green-300 rounded-xl font-medium"
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl">✅</span>
                    <div>
                      <strong>Success!</strong> Message sent successfully.
                      I&apos;ll get back to you soon.
                    </div>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900/50 border-2 border-red-400 dark:border-red-500 text-red-700 dark:text-red-300 rounded-xl font-medium"
                  role="alert"
                  aria-live="assertive"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl">❌</span>
                    <div>
                      <strong>Error!</strong> Something went wrong. Please try
                      again or email me directly at{" "}
                      <a
                        href="mailto:gummireddy2808@gmail.com"
                        className="underline font-semibold hover:text-red-900 dark:hover:text-red-100"
                      >
                        gummireddy2808@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
