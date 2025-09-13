'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Awlad
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <Image
                  src="/awlad.jpeg"
                  alt="Awlad's Profile"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto border-4 border-white/20 shadow-2xl"
                />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Awlad</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Software Developer passionate about creating innovative solutions and building exceptional user experiences
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href="https://www.linkedin.com/in/litonawlad"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/awlad"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="/awlad_resume.pdf"
                  download="Awlad_Resume.pdf"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <span>Resume</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              I&apos;m a passionate software developer with expertise in modern web technologies.
              I love creating efficient, scalable solutions and have experience working with various
              technologies including React, Node.js, and mobile development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Full Stack Development</h3>
              <p className="text-gray-300">
                Experienced in building complete web applications from frontend to backend with modern technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <User className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">UI/UX Focus</h3>
              <p className="text-gray-300">
                Creating intuitive and beautiful user interfaces with attention to detail and user experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <Briefcase className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Problem Solving</h3>
              <p className="text-gray-300">
                Analytical approach to solving complex problems with clean, maintainable code.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Here are some of the projects I&apos;ve worked on that showcase my skills and experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Brandscopic</h3>
              <p className="text-gray-300 mb-4">
                Brandscopic centralizes experiential marketing, managing events, campaigns, brands, staff, KPIs, and reports, fostering data-driven decisions.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-md text-xs">Ruby (3.1.4)</span>
                  <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-md text-xs">Ruby on Rails (6.1.7.4)</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">PostgreSQL</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Devise</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">ActiveAdmin</span>
                  <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-md text-xs">Sidekiq</span>
                  <span className="px-2 py-1 bg-orange-600/20 text-orange-300 rounded-md text-xs">Sunspot/Solr</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Paperclip</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-md text-xs">RSpec & Capybara</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-md text-xs">Slim & Haml</span>
                  <span className="px-2 py-1 bg-pink-600/20 text-pink-300 rounded-md text-xs">Sass & Bootstrap</span>
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded-md text-xs">jQuery</span>
                  <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-md text-xs">Redis</span>
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded-md text-xs">Omniauth</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">Geocoder</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Rabl & ActiveModelSerializers</span>
                  <span className="px-2 py-1 bg-orange-600/20 text-orange-300 rounded-md text-xs">AWS</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">Flightcontrol</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="http://brandscopic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Visit Site</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Poll Worker Hub</h3>
              <p className="text-gray-300 mb-4">
                Poll Worker Hub centralizes experiential marketing, managing events, campaigns, brands, staff, KPIs, and reports, fostering data-driven decisions.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded-md text-xs">React (with Vite)</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-md text-xs">Supabase</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">Posthresql</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">TypeScript & JavaScript</span>
                  <span className="px-2 py-1 bg-pink-600/20 text-pink-300 rounded-md text-xs">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Radix UI</span>
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded-md text-xs">TanStack React Query & React Table</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">Zod</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-md text-xs">Supabase</span>
                  <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-md text-xs">Stripe</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">SendGrid</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-md text-xs">Cypress</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">ESLint</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">Yarn & npm</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.pollworkerhub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Visit Site</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Electask</h3>
              <p className="text-gray-300 mb-4">
                Electask is a comprehensive task and project management platform designed to streamline workflows and enhance productivity for teams and individuals.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-md text-xs">Ruby on Rails (6.1)</span>
                  <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-md text-xs">Ruby (3.1.4)</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">PostgreSQL</span>
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded-md text-xs">React.js</span>
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded-md text-xs">JavaScript</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">TypeScript</span>
                  <span className="px-2 py-1 bg-orange-600/20 text-orange-300 rounded-md text-xs">AWS S3</span>
                  <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-md text-xs">Heroku</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">ActiveAdmin</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Devise</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-md text-xs">RSpec</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-md text-xs">Capybara</span>
                  <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-md text-xs">Bootstrap 5</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">Font Awesome</span>
                  <span className="px-2 py-1 bg-pink-600/20 text-pink-300 rounded-md text-xs">SASS/SCSS</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Papertrail</span>
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded-md text-xs">OmniAuth</span>
                  <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-md text-xs">Redis</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Wicked PDF</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Sentry</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.electask.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Visit Site</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Simple Signup</h3>
              <p className="text-gray-300 mb-4">
                This platform is an event management solution that is widely recognized as the most popular in Sweden. It enables event organizers to create and share events, and allows participants to purchase tickets through online or offline payment systems.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-md text-xs">Ruby on Rails</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">MySQL</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Git</span>
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded-md text-xs">jQuery</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-md text-xs">Payment Gateways</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://simplesignup.se/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Visit Site</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">My Robi Mobile App</h3>
              <p className="text-gray-300 mb-4">
                Mobile application available on Google Play Store with modern features and user-friendly design.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-md text-xs">Ruby on Rails</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">MySQL</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Git</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-md text-xs">REST API</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://play.google.com/store/apps/details?id=net.omobio.robisc&hl=en&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Play Store</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Biyeta</h3>
              <p className="text-gray-300 mb-4">
                Biyeta, a Bengali matrimony site, emphasizes user privacy, suggesting matches based on profiles, displaying information with explicit consent.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-md text-xs">Ruby on Rails</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">MySQL</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Git</span>
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded-md text-xs">jQuery</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-md text-xs">RSpec</span>
                  <span className="px-2 py-1 bg-orange-600/20 text-orange-300 rounded-md text-xs">AWS S3</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.biyeta.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Visit Site</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Feedier</h3>
              <p className="text-gray-300 mb-4">
                Customer feedback platform designed to help businesses collect and analyze user feedback effectively.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-md text-xs">Laravel</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">MySQL</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Git</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-md text-xs">Vue.js</span>
                  <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-md text-xs">GraphQL</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://feedier.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Visit Site</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Day trip finder</h3>
              <p className="text-gray-300 mb-4">
                Day Trip Finder showcases UK attractions, with user-contributed feedback and location-based search.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-md text-xs">Ruby on Rails</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">MySQL</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Git</span>
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded-md text-xs">jQuery</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="http://www.daytripfinder.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Visit Site</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">BettingExpert</h3>
              <p className="text-gray-300 mb-4">
                BettingExpert, with over 1 million users, guides users to make better bets globally. Significantly contributed to store, blog, clash, and tipster-statistics modules.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-md text-xs">PHP</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">ModX</span>
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">MySQL</span>
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-md text-xs">Git</span>
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded-md text-xs">jQuery</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.bettingexpert.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Visit Site</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let&apos;s Connect</h2>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              I&apos;m always interested in discussing new opportunities and collaborating on exciting projects.
            </p>

            <div className="flex justify-center space-x-8">
              <motion.a
                href="https://www.linkedin.com/in/litonawlad"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center space-y-2 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Linkedin size={32} />
                </div>
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/awlad"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center space-y-2 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                  <Github size={32} />
                </div>
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href="mailto:awlad@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center space-y-2 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <Mail size={32} />
                </div>
                <span>Email</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Awlad.
          </p>
        </div>
      </footer>
    </div>
  )
}
