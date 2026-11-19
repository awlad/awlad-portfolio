'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import type { ReactNode } from 'react'
import {
  careerStart,
  currentClientStart,
  education,
  experience,
  profile,
  projects,
  remoteStart,
  services,
  skills,
  yearsSince,
} from '../data/resume'

const card = 'bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20'
const tag = 'px-2 py-1 bg-white/10 text-gray-200 rounded-md text-xs'

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <Reveal className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-gray-300 text-lg max-w-3xl mx-auto">{subtitle}</p>}
    </Reveal>
  )
}

export default function Home() {
  const yearsOfExperience = yearsSince(careerStart)
  const remoteYears = yearsSince(remoteStart)
  const clientYears = yearsSince(currentClientStart)

  const stats = [
    { value: `${yearsOfExperience}+`, label: 'Years of experience' },
    { value: `${remoteYears}+`, label: 'Years working remotely' },
    { value: `${clientYears}+`, label: 'Years with current client' },
  ]
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">Awlad</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Image
              src="/awlad.jpeg"
              alt="Awlad's Profile"
              width={200}
              height={200}
              priority
              className="rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl w-[200px] h-[200px] object-cover object-center"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Awlad</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-semibold mb-2">{profile.title}</p>
            <p className="text-lg md:text-xl text-gray-300 mb-3">
              {yearsOfExperience}+ Years Building, Scaling &amp; Modernizing Web Applications
            </p>
            <p className="text-sm md:text-base text-blue-300 mb-6">Ruby on Rails · React · PostgreSQL · Supabase</p>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I help businesses build, maintain, and modernize reliable web applications. From legacy Rails systems to modern
              React applications, I bring deep engineering experience, long-term ownership, and a product-focused approach.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
              <span className="px-3 py-1 rounded-full border border-green-400/40 bg-green-500/10 text-green-300">Available for remote projects</span>
              <span className="px-3 py-1 rounded-full border border-blue-400/40 bg-blue-500/10 text-blue-300">Long-term partnerships</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="#contact"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </a>
              <a
                href={profile.resumePath}
                className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto text-center"
              >
                View Resume
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 text-gray-300 hover:text-white transition-colors">
                <Github size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className={`${card} text-center`}>
              <div className="text-4xl font-bold text-blue-400">{s.value}</div>
              <div className="text-gray-300 mt-1">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="What I Do"
            subtitle="I take ownership of existing business-critical applications and keep them reliable, modern, and moving forward, while building new features and products."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05} className={card}>
                <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-300">{s.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 max-w-4xl mx-auto text-center">
            <p className="text-gray-300">
              {yearsOfExperience}+ years of production engineering, long-term ownership of established applications, and direct
              collaboration with clients in the USA, France, Denmark, and Sweden, covering architecture, deployment,
              performance, and technical leadership as Director of Technology.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Featured Projects" subtitle="Real production systems: what they do and what I contributed." />
          <div className="grid lg:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1} className={`${card} flex flex-col hover:border-white/40 transition-all duration-300`}>
                {p.image && (
                  <Image
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    width={1280}
                    height={640}
                    className="rounded-lg mb-4 w-full aspect-[2/1] object-cover object-top border border-white/10"
                  />
                )}
                <h3 className="text-xl font-semibold text-white mb-3">{p.name}</h3>
                <p className="text-gray-300 mb-4">{p.summary}</p>
                <h4 className="text-sm font-semibold text-blue-400 mb-2">My contribution</h4>
                <ul className="text-gray-300 text-sm space-y-1 mb-4">
                  {p.contribution.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className={tag}>{t}</span>
                  ))}
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>{p.urlLabel ?? 'Visit Site'}</span>
                  </a>
                )}
              </Reveal>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-white mt-16 mb-6 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {other.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05} className={card}>
                <h4 className="text-lg font-semibold text-white mb-2">{p.name}</h4>
                <p className="text-gray-300 text-sm mb-3">{p.summary}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tech.map((t) => (
                    <span key={t} className={tag}>{t}</span>
                  ))}
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>{p.urlLabel ?? 'Visit Site'}</span>
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Professional Experience"
            subtitle={`${yearsOfExperience}+ years of building and maintaining production software, including ${clientYears}+ years of continuous ownership of one platform.`}
          />
          <div className="space-y-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.05} className={card}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                    <p className="text-blue-400 font-medium">{job.company}, {job.location}</p>
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">
                    {job.period}
                    {job.note && <span className="block md:text-right text-gray-400 text-sm">{job.note}</span>}
                  </span>
                </div>
                <ul className="text-gray-300 space-y-2">
                  {job.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Technical Expertise" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <Reveal key={group.category} delay={i * 0.05} className={card}>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={tag}>{item}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-3 text-center">Education</h3>
            <ul className="text-gray-300 space-y-2 text-center">
              {education.map((e) => (
                <li key={e.degree}>
                  {e.degree}, {e.school} ({e.period})
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Have a Rails application that needs attention?</h2>
            <p className="text-gray-300 text-lg mb-6">
              I can help you maintain, modernize, scale, and improve your existing web application. Available for long-term remote
              engagements and part-time development partnerships.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
              <span className="px-3 py-1 rounded-full border border-green-400/40 bg-green-500/10 text-green-300">Remote worldwide</span>
              <span className="px-3 py-1 rounded-full border border-blue-400/40 bg-blue-500/10 text-blue-300">Long-term projects</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center"
              >
                <Mail size={20} />
                <span>Let&apos;s discuss your project →</span>
              </a>
              <a
                href={profile.resumePath}
                className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto text-center"
              >
                View Resume
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              Email: <a href={`mailto:${profile.email}`} className="text-blue-300 hover:text-blue-200 underline">{profile.email}</a>
            </p>
            <div className="flex justify-center gap-6">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={28} />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-white transition-colors">
                <Github size={28} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Awlad.</p>
        </div>
      </footer>
    </div>
  )
}
