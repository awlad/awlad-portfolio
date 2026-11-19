export const yearsSince = (start: string) => {
  const diffInMilliseconds = new Date().getTime() - new Date(start).getTime()
  return Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25))
}

export const careerStart = '2012-11-01'
export const remoteStart = '2018-01-01'
export const currentClientStart = '2019-12-01'

export const profile = {
  name: 'Md Awlad Hossain',
  shortName: 'Awlad',
  title: 'Senior Ruby on Rails Engineer & Technical Lead',
  location: 'Dhaka, Bangladesh',
  email: 'awladliton@gmail.com',
  website: 'https://www.awlad.dev',
  linkedin: 'https://www.linkedin.com/in/litonawlad',
  github: 'https://github.com/awlad',
  resumePath: '/resume',
}

export const services = [
  { title: 'Rails application development', description: 'New features and products on Ruby on Rails, built to be maintainable.' },
  { title: 'Legacy modernization', description: 'Upgrading Ruby and Rails versions, dependencies, infrastructure and test coverage without stopping the business.' },
  { title: 'React & full-stack development', description: 'React, TypeScript and Next.js front ends integrated with Rails or Supabase back ends.' },
  { title: 'Database & performance', description: 'PostgreSQL design, query tuning, background jobs and caching for faster, more reliable apps.' },
  { title: 'Technical leadership', description: 'Architecture, code review, agile delivery and mentoring for teams of 2–15 engineers.' },
]

export const skills = [
  { category: 'Backend', items: ['Ruby', 'Ruby on Rails', 'REST APIs', 'Sidekiq'] },
  { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
  { category: 'Database', items: ['PostgreSQL', 'MySQL', 'Redis'] },
  { category: 'Infrastructure', items: ['AWS (EC2, S3, RDS)', 'Heroku', 'Vercel', 'Docker', 'CI/CD', 'Nginx'] },
  { category: 'Modern development', items: ['Supabase', 'Third-party APIs', 'Payment gateways (Stripe, PayPal, Braintree)', 'AI-assisted development'] },
  { category: 'Testing', items: ['RSpec', 'Capybara', 'Cypress'] },
]

export type Job = {
  role: string
  company: string
  location: string
  period: string
  note?: string
  bullets: string[]
}

export const experience: Job[] = [
  {
    role: 'Director of Technology',
    company: 'Brandscopic',
    location: 'San Francisco, USA (Remote)',
    period: 'December 2019 - Present',
    bullets: [
      'Own and evolve a production Ruby on Rails platform over several years, leading technology strategy and delivery',
      'Optimized and scaled a legacy Rails system, resulting in a 20% performance improvement',
      'Built modern React.js and Next.js applications with PostgreSQL and Supabase integration',
      'Customized sprints around client needs, resulting in a 10% reduction in development time',
      'Designed application architecture, reviewed pull requests, and supervised database management and deployments',
      'Worked with product stakeholders to shape the roadmap and maintain documentation',
    ],
  },
  {
    role: 'Technical Team Lead',
    company: 'Augnitive',
    location: 'Dhaka, Bangladesh',
    period: 'March 2020 - March 2023',
    note: 'Part-time, alongside Brandscopic',
    bullets: [
      'Met with clients, gathered requirements and broke them into stories and sprints',
      'Monitored development progress and provided technical guidance to the team',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Feedier',
    location: 'Lille, France (Remote)',
    period: 'January 2019 - November 2019',
    bullets: [
      'Conducted usability and performance analysis and recommended improvements',
      'Led project scheduling, planning and deadlines across multiple concurrent projects',
      'Worked as a full-stack engineer: requirements, architecture, code, tests and pull-request reviews',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Nascenia Limited',
    location: 'Dhaka, Bangladesh',
    period: 'September 2012 - December 2018',
    bullets: [
      'Developed, tested and maintained Ruby on Rails applications for international clients',
      'Resolved technical issues and enforced coding standards, best practices and performance metrics',
      'Mentored junior developers and contributed to the team knowledge base',
    ],
  },
]

export type Project = {
  slug: string
  name: string
  featured: boolean
  summary: string
  contribution: string[]
  tech: string[]
  url?: string
  urlLabel?: string
  image?: string
}

export const projects: Project[] = [
  {
    slug: 'poll-worker-hub',
    name: 'Poll Worker Hub',
    featured: true,
    summary:
      'A workforce management platform for election operations, helping organizations manage poll workers, applications, training, assignments, and election-day activities.',
    contribution: [
      'Developed and maintained a modern React and Supabase application',
      'Designed database structures, permissions, and Row Level Security policies',
      'Implemented realtime updates and server-side workflows',
      'Worked on application performance, integrations, and operational reliability',
    ],
    tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    url: 'https://www.pollworkerhub.com',
    image: '/projects/pwh.png',
  },
  {
    slug: 'brandscopic',
    name: 'Brandscopic',
    featured: true,
    summary:
      'A long-running enterprise platform for managing experiential marketing campaigns, events, staff, brands, KPIs, and performance reporting.',
    contribution: [
      'Long-term development and maintenance of a production Rails application',
      'Application architecture, performance optimization, and database management',
      'Backend integrations, background processing, and deployment infrastructure',
      'Technical leadership and ongoing product development',
    ],
    tech: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Sidekiq', 'Solr', 'AWS'],
    url: 'http://brandscopic.com/',
    image: '/projects/brandscopic.png',
  },
  {
    slug: 'electask',
    name: 'Electask',
    featured: true,
    summary:
      'A task and project management platform designed to streamline team collaboration and workflows.',
    contribution: [
      'Rails backend development and React frontend integration',
      'Application maintenance and feature development',
      'Database and API architecture',
      'Framework and runtime modernization',
    ],
    tech: ['Ruby on Rails', 'React', 'PostgreSQL', 'AWS S3', 'Heroku'],
    url: 'https://www.electask.com/',
    image: '/projects/electask.png',
  },
  {
    slug: 'simple-signup',
    name: 'Simple Signup',
    featured: false,
    summary: 'Event management and ticketing platform, widely used in Sweden, with online and offline payments and organizer reports.',
    contribution: [],
    tech: ['Ruby on Rails', 'MySQL', 'Payment gateways'],
    url: 'https://simplesignup.se/',
  },
  {
    slug: 'my-robi',
    name: 'My Robi Mobile App',
    featured: false,
    summary: 'REST API backend for the mobile app of a leading telecom operator in Bangladesh: postpaid and prepaid accounts, internet plans, top-ups and custom bundles.',
    contribution: [],
    tech: ['Ruby on Rails', 'MySQL', 'REST API'],
    url: 'https://play.google.com/store/apps/details?id=net.omobio.robisc&hl=en&gl=US',
    urlLabel: 'Play Store',
  },
  {
    slug: 'biyeta',
    name: 'Biyeta',
    featured: false,
    summary: 'Privacy-focused Bengali matrimony site that suggests matches from profiles and shares information only with explicit consent.',
    contribution: [],
    tech: ['Ruby on Rails', 'MySQL', 'AWS S3'],
    url: 'https://www.biyeta.com/en',
  },
  {
    slug: 'feedier',
    name: 'Feedier',
    featured: false,
    summary: 'Customer feedback platform that collects real-time feedback and turns it into actionable insights.',
    contribution: [],
    tech: ['Laravel', 'Vue.js', 'GraphQL', 'MySQL'],
    url: 'https://feedier.ai/',
  },
  {
    slug: 'day-trip-finder',
    name: 'Day Trip Finder',
    featured: false,
    summary: 'UK attractions directory with user-contributed feedback and location-based search.',
    contribution: [],
    tech: ['Ruby on Rails', 'MySQL'],
    url: 'http://www.daytripfinder.co.uk/',
  },
  {
    slug: 'bettingexpert',
    name: 'BettingExpert',
    featured: false,
    summary: 'Betting tips community with over 1 million users. Contributed to the store, blog, clash and tipster-statistics modules.',
    contribution: [],
    tech: ['PHP', 'ModX', 'MySQL'],
    url: 'https://www.bettingexpert.com/',
  },
]

export const education = [
  { degree: 'B.Sc in Computer Science and Engineering', school: 'United International University, Dhaka, Bangladesh', period: '2009 - 2012' },
  { degree: 'Diploma in Computer Science and Engineering', school: 'Bogura Polytechnic Institute, Bogura, Bangladesh', period: '2004 - 2008' },
]

export const certifications = [
  'KM Assessment: Ruby on Rails (RoR) framework 4 programming assessment',
  'Stack Overflow: https://stackoverflow.com/users/awlad-liton',
  'Ethical Hacking: software development, security policy, and vulnerabilities',
]

export const resumeSummary = () =>
  `Senior Ruby on Rails engineer with ${yearsSince(careerStart)}+ years of experience building, scaling and modernizing web applications, including ${yearsSince(remoteStart)}+ years working remotely with clients in the USA, France, Denmark and Sweden. Director of Technology at Brandscopic since 2019, with a track record of long-term ownership of production systems, legacy Rails modernization, and modern React and Supabase development.`
