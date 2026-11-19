# awlad.dev Improvement Plan

Source: external review feedback (score 7/10). Single-page Next.js site: `src/app/page.tsx` (sections: hero, about, experience, projects, contact), `src/app/layout.tsx` (metadata).

## Decisions (confirmed by owner)
- Site is the owner's personal site, linked from CV, LinkedIn and GitHub. Purpose: showcase skill set and attract clients for Rails (and other) projects.
- Augnitive (Mar 2020 – Mar 2023) was part-time alongside Brandscopic: label it "Part-time" in the experience section.
- Owner will provide real screenshots for each project (place in `public/projects/`).
- Primary goal: both freelance/Upwork clients and better career opportunities.
- Design: modern, minimal, premium developer portfolio (keep dark theme).
- Remote experience: working remotely since 2018; calculate dynamically (like `yearsOfExperience`), not hard-coded.
- Highlights strip: no "20+ projects" stat. Use years of experience, remote years, years with current client (since Dec 2019, dynamic).

## Facts to verify with owner first
- Years of experience: code derives it from `2012-11-01` (`startDate`, page.tsx:9). Feedback says 14+. Confirm it renders correctly for the current date.
- Remote years: hard-coded "5+" (page.tsx:171); replace with dynamic calc from 2018.
- "Years with current client" is computed from Brandscopic start (Dec 2019).
- Confirm client permission to show screenshots (owner supplies them; reviewer's images were illustrative only).

## Phase 1 – Quick fixes (small, low risk)
- [x] Fix typo `Posthresql` -> `PostgreSQL` (page.tsx:384).
- [x] Rewrite Poll Worker Hub description (page.tsx:377); currently copied from Brandscopic.
- [x] Update remote experience "5+" to a dynamic value (page.tsx:171) derived from a `2018` constant like `yearsOfExperience`.
- [x] Mark Augnitive as "Part-time" alongside Brandscopic (page.tsx:246).
- [x] Copyright already uses `new Date().getFullYear()` (page.tsx:730): no change needed; confirm deployed build is current.
- [ ] Keep `public/ResumeOfAwlad.pdf`, `Resume of Awlad.md/pdf` and site consistent (titles, dates, skills). Remove stale duplicate `public/awlad_resume.pdf` if unused.

## Phase 2 – Positioning and hero (very high priority)
- [x] Headline: "Senior Ruby on Rails Engineer" + "14+ Years Building, Scaling & Modernizing Web Applications".
- [x] Stack line: Ruby on Rails · React · PostgreSQL · Supabase.
- [x] Intro: "I help businesses build, maintain, and modernize reliable web applications…"
- [x] Badges: "Available for remote projects", "Long-term partnerships".
- [x] CTAs: primary "Contact Me" (mailto/scroll to #contact), secondary "View Resume"; keep LinkedIn/GitHub as icon links.
- [x] Keep "Director of Technology" prominent.
- [x] Update `layout.tsx` title/description/Open Graph to match new positioning (Senior Rails Engineer & Technical Lead).

## Phase 2b – Visual polish (keep dark theme, no redesign)
- [x] One primary accent (blue); purple only in the name gradient.
- [x] Single prominent primary CTA ("Contact Me"); resume, LinkedIn and GitHub as secondary buttons (replace the blue/gray/green mix).
- [x] Check text contrast (e.g. `text-gray-400` on dark backgrounds) against WCAG AA; lighten where needed.
- [x] One muted style for tech tags instead of multiple colors.
- [x] Consistent dark section backgrounds with subtle alternation (existing `bg-black/20`).
- [ ] Only revisit the palette if the design direction changes.

## Phase 3 – New sections
- [x] Highlights/stats strip: dynamic years of experience, remote years (since 2018), years with current client (since Dec 2019).
- [x] "What I do": Rails development, legacy modernization, React/full-stack, DB & performance, technical leadership.
- [x] Rewrite About around: production ownership, legacy Rails modernization, full-stack React/PostgreSQL, international clients, architecture/deployment/performance/leadership. Drop generic phrases ("seasoned", "proven track record").
- [x] Section order: Hero, Highlights, What I do, Featured projects, Experience, Expertise, Education & Contact.

## Phase 4 – Projects
Each project card: problem solved, short description, "My contribution" bullets, tech tags, real screenshot, link.
- [x] Poll Worker Hub (featured, smarte360.com): election workforce platform; React, TypeScript, Supabase, PostgreSQL; RLS, realtime, server-side workflows, performance/integrations.
- [x] Brandscopic: long-running Rails enterprise platform; Ruby, Rails, PostgreSQL, Redis, Sidekiq, AWS; architecture, performance, integrations, background jobs, deployment, leadership.
- [x] Electask: Rails + React task platform; Ruby on Rails, React, PostgreSQL, AWS; backend/API, maintenance, framework/runtime modernization.
- [x] Add real screenshots for the 3 featured projects only (Poll Worker Hub, Brandscopic, Electask) to `public/projects/`, then set `image` in `src/data/resume.ts`. Older projects stay text-only.
- [x] Emphasize measurable outcomes where known.

## Phase 5 – Experience and skills
- [x] Rewrite Brandscopic entry to stress multi-year ownership and evolution of a production system.
- [ ] Add measurable achievements per role where available.
- [x] Categorized skills: Backend (Ruby, Rails); Frontend (React, JS, TS, Next.js); Database (PostgreSQL, MySQL, Redis); Infrastructure (AWS, Heroku, Docker, CI/CD); Modern (Supabase, APIs, AI-assisted dev); Testing (RSpec, Capybara, Cypress).
- [x] De-emphasize PHP/Laravel (move to history or per-role only); trim long tech tag lists on project cards.

## Phase 6 – Contact / conversion
- [x] Heading: "Have a Rails application that needs attention?"; copy about maintaining, modernizing, scaling; "Available for long-term remote engagements and part-time partnerships".
- [x] Badges: Remote worldwide, Long-term projects.
- [x] Buttons: Contact Me, View Resume; visible email address.
- [ ] Optional: booking link (Calendly) or Upwork profile link. PENDING: not needed now.

## Phase 7 – SEO, performance, QA
- [x] Metadata, Open Graph image, canonical URL, JSON-LD `Person`, sitemap/robots.
- [ ] Run Lighthouse (mobile + desktop); fix LCP/CLS issues, image sizing, framer-motion bundle impact.
- [ ] Accessibility pass (contrast, focus states, alt text, headings order).
- [ ] Check `.github/workflows/deploy.yml`/Vercel deploy after changes; verify on mobile.
- [x] Favicon: add `src/app/icon.png` (or `icon.svg`) plus `apple-icon.png` (180x180) and `favicon.ico` using Next.js App Router file conventions; simple "A" monogram or logo in the blue accent on the dark background; verify in browser tab and on mobile home screen.
- [ ] Optional: `manifest.webmanifest` with theme color matching the dark theme.

## Phase 8 – Case study pages (optional, PENDING: deferred by owner)
The site stays a single page; this adds detail pages only for top projects.
- [ ] Add dynamic route `src/app/projects/[slug]/page.tsx` with `generateStaticParams` and per-page `generateMetadata`.
- [ ] Move project data into a shared file (e.g. `src/data/projects.ts`) used by homepage cards and case-study pages.
- [ ] Start with Brandscopic and Poll Worker Hub; Electask afterwards.
- [ ] Page structure: problem, my role, architecture/stack, key challenges, outcome, screenshots, link back to home and contact CTA.
- [ ] Homepage project cards link to `/projects/<slug>`.
- [ ] Add pages to sitemap; verify shared navbar/back link and mobile layout.
- [ ] Confirm confidentiality limits with clients before publishing details.
- [ ] Blog/writing: out of scope unless the owner wants regular publishing.

## Phase 9 – Resume rewrite and generated PDF
Resume review findings (current `Resume of Awlad.md/pdf`, `public/ResumeOfAwlad.pdf`):
- [x] Update stale numbers: "13-year" -> 14+ (dynamic), "6 years remote" -> since 2018 (dynamic).
- [x] Replace long generic summary with 2–3 lines: Senior Rails Engineer & Technical Lead, legacy modernization, long-term ownership, international clients.
- [x] Fix title mismatch: header "Sr Software Engineer" -> "Senior Ruby on Rails Engineer & Technical Lead" (same on site and LinkedIn).
- [x] Remove "over 20 projects" claim unless verifiable.
- [x] Categorize skills (Backend, Frontend, Database, Infrastructure, Testing); Rails first; move PHP/Laravel/jQuery/XML/Apache to legacy projects only.
- [x] Add Augnitive (part-time, Mar 2020 – Mar 2023) to the resume, matching the site.
- [ ] Add measurable results to Feedier and Nascenia bullets where possible.
- [x] Make project descriptions consistent with the site (Electask wording); shorten old projects (Biyeta, Simple Signup).
- [x] Stack Overflow link confirmed (https://stackoverflow.com/users/awlad-liton); Ethical Hacking kept in certifications.
- [ ] Tighten to one page, or a clean second page.

Single source of truth (generated, not user-facing):
- [x] Create `src/data/resume.ts` (profile, experience, projects, skills, education) used by the site and the resume.
- [x] Add a print-styled `/resume` page (and/or build-time PDF via Puppeteer/`@react-pdf/renderer`) so dates, titles and computed years never drift.
- [x] Point the hero/contact "View Resume" button at the generated resume; remove duplicate static PDFs (`public/awlad_resume.pdf`, `Resume of Awlad.md/pdf`) once replaced.
- [ ] Keep the downloadable PDF filename stable (`Awlad_Resume.pdf`).

## Priority / order of execution
1. Phase 1 + Phase 2 + Phase 2b (hero, positioning, visual polish)
2. Phase 4 (projects) + Phase 5 experience dates
3. Phase 6 (contact CTAs)
4. Phase 3 (new sections), skills simplification
5. Phase 7 (SEO/perf audit)
6. Phase 8 (case study pages, optional)
7. Phase 9 (resume rewrite + generated PDF; can run alongside Phase 5)

## Definition of done
- `npm run build` and `npm run lint` pass.
- No factual claim (years, stats, dates) unverified by owner.
- Resume PDF/MD match site content.
