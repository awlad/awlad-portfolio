import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import PrintButton from './PrintButton'
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  resumeSummary,
  skills,
} from '../../data/resume'

export const metadata: Metadata = {
  title: `Resume - ${profile.name}`,
  description: resumeSummary(),
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-5 print:mb-3">
      <h2 className="text-sm print:text-[12px] font-bold uppercase tracking-wider text-blue-800 border-b border-blue-200 mb-2 print:mb-1.5 pb-0.5">{title}</h2>
      {children}
    </section>
  )
}

export default function ResumePage() {
  return (
    <main className="bg-gray-100 print:bg-white text-gray-900 min-h-screen print:min-h-0 py-6 print:py-0">
      <div className="max-w-3xl mx-auto bg-white shadow-lg print:shadow-none px-10 py-10 text-[13px] leading-snug print:text-[11.5px] print:leading-tight print:px-0 print:py-0">
        <div className="print:hidden mb-6 flex gap-4 text-blue-700">
          <a href="/">← Back to site</a>
          <PrintButton />
        </div>

        <header className="mb-5 print:mb-3 border-b-2 border-blue-800 pb-3 print:pb-2">
          <p className="text-gray-600">{profile.location} · {profile.title}</p>
          <p className="text-blue-800">
            {profile.email} · {profile.website.replace('https://', '')} · {profile.linkedin.replace('https://www.', '')} · {profile.github.replace('https://', '')}
          </p>
          <h1 className="text-3xl print:text-2xl font-bold mt-1 uppercase tracking-wide">{profile.name}</h1>
        </header>

        <Section title="Summary">
          <p>{resumeSummary()}</p>
        </Section>

        <Section title="Skills">
          <ul className="space-y-1 print:space-y-0.5">
            {skills.map((g) => (
              <li key={g.category}>
                <span className="font-semibold">{g.category}:</span> {g.items.join(', ')}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Experience">
          {experience.map((job) => (
            <div key={job.company} className="mb-4 print:mb-2.5 break-inside-avoid">
              <p className="font-semibold">
                {job.company}, {job.location} — <span className="italic font-normal">{job.role}</span>
              </p>
              <p className="text-xs print:text-[10px] text-gray-600 uppercase">
                {job.period}
                {job.note ? ` (${job.note})` : ''}
              </p>
              <ul className="list-disc ml-5 mt-1">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Selected Projects">
          {projects.filter((p) => p.featured).map((p) => (
            <p key={p.slug} className="mb-1.5 break-inside-avoid">
              <span className="font-semibold">{p.name}:</span> {p.summary}{' '}
              <span className="text-gray-600">({p.tech.join(', ')})</span>
            </p>
          ))}
          <p className="text-gray-700">
            <span className="font-semibold">Earlier work:</span>{' '}
            {projects.filter((p) => !p.featured).map((p) => p.name).join(', ')}.
          </p>
        </Section>

        <Section title="Education & Certifications">
          <ul className="list-disc ml-5">
            {education.map((e) => (
              <li key={e.degree}>
                <span className="font-semibold">{e.degree}</span> ({e.school}, {e.period})
              </li>
            ))}
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>
      </div>
    </main>
  )
}
