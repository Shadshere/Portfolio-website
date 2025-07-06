'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Calendar, ExternalLink, Star } from 'lucide-react'

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  interface Certificate {
    title: string;
    issuer: string;
    date: string;
    description: string;
    skills: string[];
    level: string;
    verifyUrl: string;
  }

  const certificates = [
    {
      title: "Microsoft Excel Training",
      issuer: "Microsoft Training Certification",
      date: "2024",
      description: "Comprehensive training in Microsoft Excel covering advanced formulas, data analysis, pivot tables, and spreadsheet management.",
      skills: ["Excel", "Data Analysis", "Pivot Tables", "Formulas"],
      level: "Intermediate",
      verifyUrl: "https://drive.google.com/file/d/1sfqr6RRITVEHaNwa2BA5LCFVZ4s2kc5O/view?usp=sharing"
    },
    {
      title: "LETS LEARN HTML",
      issuer: "Web Development Institute",
      date: "2024",
      description: "Foundational certification in HTML covering semantic markup, web structure, forms, and modern HTML5 elements.",
      skills: ["HTML5", "Web Structure", "Semantic Markup", "Forms"],
      level: "Beginner",
      verifyUrl: "https://drive.google.com/file/d/1OzoKa0sZhbKRZqw5o-Zp4jWeHWwoYm1f/view?usp=sharing"
    },
    {
      title: "e-LATIH Python Basic to Brilliance in HD",
      issuer: "e-LATIH Learning Platform",
      date: "2024",
      description: "Comprehensive Python programming certification covering fundamentals to advanced concepts in high-definition video format.",
      skills: ["Python", "Programming Fundamentals", "Object-Oriented Programming", "Data Structures"],
      level: "Intermediate",
      verifyUrl: "https://drive.google.com/file/d/1Ekt4pt-iCVPtu5BApmGUC8YdYRsSRbzk/view?usp=sharing"
    },
    {
      title: "e-LATIH Explore AI Basic",
      issuer: "e-LATIH Learning Platform",
      date: "2024",
      description: "Introduction to Artificial Intelligence covering basic concepts, machine learning fundamentals, and AI applications.",
      skills: ["Artificial Intelligence", "Machine Learning", "AI Concepts", "Data Science"],
      level: "Beginner",
      verifyUrl: "https://drive.google.com/file/d/1PZ3wVC5go62aPVgIQGkJhUjLl-Bh4enO/view?usp=sharing"
    },
    {
      title: "Dean List 2025, 2024 & Foundation",
      issuer: "Universiti Selangor (UNISEL)",
      date: "2024-2025",
      description: "Academic excellence recognition for outstanding performance across multiple semesters including foundation and degree programs.",
      skills: ["Academic Excellence", "Consistent Performance", "Time Management", "Study Skills"],
      level: "Advanced",
      verifyUrl: "https://drive.google.com/file/d/1UhfNprWYFQqGB6SB4oTWIvgr7IK3Xlr4/view?usp=sharing"
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Advanced':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Certificate Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8" />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(cert.level)}`}>
                    {cert.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-blue-100 text-sm">{cert.issuer}</p>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{cert.date}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Skills Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verify Button */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-center">
                    <button 
                      onClick={() => window.open(cert.verifyUrl, '_blank')}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Verify Certificate</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I am committed to continuous learning and professional development. 
              These certifications represent my dedication to staying current with 
              industry standards and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
