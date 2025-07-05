'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Database, 
  Globe, 
  Users, 
  Target, 
  Eye, 
  BookOpen, 
  Crown 
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "Javascript", "CSS", "HTML", "PHP"],
      icon: <Code className="w-6 h-6" />
    },
    {
      category: "Web Development Tools",
      skills: ["WordPress", "Visual Studio Code", "GitHub"],
      icon: <Globe className="w-6 h-6" />
    },
    {
      category: "Database",
      skills: ["MYSQL", "SQL", "XAMPP"],
      icon: <Database className="w-6 h-6" />
    },
    {
      category: "Networking",
      skills: ["Cisco Packet Tracer"],
      icon: <Globe className="w-6 h-6" />
    }
  ]

  const softSkills = [
    { skill: "Teamwork", icon: <Users className="w-6 h-6" /> },
    { skill: "Punctual and well-organized", icon: <Target className="w-6 h-6" /> },
    { skill: "Attention to detail", icon: <Eye className="w-6 h-6" /> },
    { skill: "Adaptable and eager to learn new skills", icon: <BookOpen className="w-6 h-6" /> },
    { skill: "Leadership", icon: <Crown className="w-6 h-6" /> }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities and soft skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-blue-600 mr-3">
                      {category.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg flex items-center"
                >
                  <div className="text-blue-600 mr-4">
                    {item.icon}
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white font-medium">
                    {item.skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
