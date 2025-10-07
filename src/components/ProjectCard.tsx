import Link from 'next/link';

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl border border-gray-100 dark:border-gray-800 p-6 bg-white/60 dark:bg-white/5 backdrop-blur shadow-soft hover:-translate-y-0.5 transition">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/0 to-violet-500/0 group-hover:from-brand-500/5 group-hover:to-violet-500/5 transition" />
      <h3 className="relative z-10 text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
      <p className="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-2.5 py-1 text-xs text-gray-700 dark:text-gray-200">{t}</span>
        ))}
      </div>
      <div className="relative z-10 mt-5 flex gap-4 text-sm">
        {project.link && (
          <Link href={project.link} target="_blank" className="text-brand-600 dark:text-brand-400 hover:underline">Live</Link>
        )}
        {project.repo && (
          <Link href={project.repo} target="_blank" className="text-gray-700 dark:text-gray-300 hover:underline">Code</Link>
        )}
      </div>
    </div>
  );
}

