'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "TheraBook",
      description: "A final year project for Terapi House (a massaging service company in Bukit Rimau, Shah Alam)",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      category: "Web Development",
      icon: <Globe className="w-8 h-8" />,
      image: "/images/terapi-house-logo.jpg",
      github: null,
      demo: "https://therabook.bhramadev.com/"
    },
    {
      title: "Portfolio Website",
      description: "A web-based portfolio which shows details of me like (Certificates, Contact, Projects, About, Skills)",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "CSS", "JavaScript"],
      category: "Web Development",
      icon: <Globe className="w-8 h-8" />,
      image: "/api/placeholder/400/250",
      github: null,
      demo: null
    },
    {
      title: "TrackApply - Job Tracker Web App",
      description: "A simple and intuitive web app that helps users track their job applications in one place.",
      technologies: ["Python", "CSS", "JavaScript", "Flask"],
      category: "Web Application",
      icon: <Code className="w-8 h-8" />,
      image: "/api/placeholder/400/250",
      github: null,
      demo: null
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects and practical applications of my skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                {project.image.startsWith('/images/') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain bg-white"
                  />
                ) : (
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white bg-opacity-90 text-gray-800 text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Click Here</span>
                    </a>
                  )}
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
          <a
            href="https://github.com/Shadshere?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>View all my Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
