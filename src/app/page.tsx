import NavBar from '@/components/NavBar';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { site, skills } from '@/data/site';
import { certifications } from '@/data/certifications';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <NavBar />

      {/* Hero */}
      <section className="container-max pt-16 sm:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 px-3 py-1 text-xs text-brand-700 bg-brand-50/60">
              Open to opportunities
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight">
              Hi, I’m <span className="gradient-text">DIYA PATEL</span>
            </h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">{site.role}</p>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-prose">{site.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.resume} className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-500 to-violet-500 text-white px-5 py-2.5 text-sm font-medium shadow-soft hover:opacity-95">
                  View Resume
                </a>
              <Link href="#projects" className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-5 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900">
                Explore Projects
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm">
              <a href={site.github} target="_blank" className="text-gray-700 dark:text-gray-300 hover:underline">GitHub</a>
              <a href={site.linkedin} target="_blank" className="text-gray-700 dark:text-gray-300 hover:underline">LinkedIn</a>
              <a href={`mailto:${site.email}`} className="text-gray-700 dark:text-gray-300 hover:underline">Email</a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-brand-500/20 to-violet-500/20 rounded-3xl blur-2xl" />
            <div className="relative aspect-square rounded-3xl border border-gray-100 dark:border-gray-800 glass flex items-center justify-center">
              <div className="text-6xl">👩🏻‍💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me" kicker="Who I Am">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m a software engineer currently pursuing a Master’s in Computer Science, passionate about building reliable, accessible, and impactful digital products. My work focuses on crafting seamless user experiences through clean architecture, scalable design, and thoughtful testing. I’m deeply interested in software development, web engineering, and the intersection of artificial intelligence and natural language processing, where I enjoy transforming complex problems into elegant, human-centered solutions. Outside of academics, I love exploring new frameworks, mentoring peers, and refining UI details with a touch of classy gradient aesthetics.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Outside of work, you’ll find me exploring new frameworks, mentoring juniors, and refining UI details with a touch of classy gradient aesthetic.
            </p>
          </div>
          <div>
            <div className="rounded-2xl border border-gray-100 dark:border-gray-800 p-4 bg-white/60 dark:bg-white/5 backdrop-blur">
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-3">Core Skills</div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-2.5 py-1 text-xs text-gray-700 dark:text-gray-200">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Featured Projects" kicker="Work I’m Proud Of">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications" kicker="Continuous Learning">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((c) => (
            <div key={c.title} className="rounded-2xl border border-gray-100 dark:border-gray-800 p-6 bg-white/60 dark:bg-white/5 backdrop-blur">
              <div className="text-sm font-medium text-gray-900 dark:text-white">{c.title}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{c.issuer} • {c.date}</div>
              {c.link && (
                <a href={c.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-brand-600 dark:text-brand-400 hover:underline">View Certificate</a>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Let’s Connect" kicker="Say Hello">
        <div className="rounded-2xl border border-gray-100 dark:border-gray-800 p-8 bg-white/60 dark:bg-white/5 backdrop-blur text-center">
          <p className="text-gray-700 dark:text-gray-300">
            I’m open to software engineering roles and exciting collaborations.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${site.email}`} className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-500 to-violet-500 text-white px-5 py-2.5 text-sm font-medium shadow-soft hover:opacity-95">Email Me</a>
            <a href={site.linkedin} target="_blank" className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-5 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900">LinkedIn</a>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}

