'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, GraduationCap, Building } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <User className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Passionate Student
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hi, I'm Amirul — a passionate and motivated final-year Bachelor of Information 
                Technology student at Universiti Selangor (UNISEL), currently completing my 
                last semester by undergoing internship as an IT Support & Admin Intern until July 18, 2025.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Third-year Bachelor of Information Technology student at 
                Universiti Selangor (UNISEL).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I have hands-on experience in solving hardware/software issues, setting up systems, 
                and managing user accounts — and I'm now shifting focus towards web development 
                and software engineering.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I enjoy building user-friendly websites and tools with technologies like HTML, CSS, 
              JavaScript, Python, and I'm currently exploring React and Node.js through personal projects. 
              My goal is to start my career in a dynamic tech environment where I can contribute, 
              grow, and keep learning.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
