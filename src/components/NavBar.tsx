import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-gray-100 dark:border-gray-900">
      <div className="container-max flex items-center justify-between h-16">
        <Link href="#" className="font-semibold tracking-tight text-gray-900 dark:text-white">
          <span className="gradient-text">DIYA PATEL</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
          <Link href="#about" className="hover:text-gray-900 dark:hover:text-white">About</Link>
          <Link href="#projects" className="hover:text-gray-900 dark:hover:text-white">Projects</Link>
          <Link href="#contact" className="hover:text-gray-900 dark:hover:text-white">Contact</Link>
          <a href="https://github.com/diyap24" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/diya-patel-58639b210/" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white">LinkedIn</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://drive.google.com/file/d/1L7HYP82KOkDyWEjMNnSr4cjTNJ8uYvg-/view?usp=drive_link"
            className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-brand-500 to-violet-500 text-white px-4 py-2 text-sm font-medium shadow-soft hover:opacity-95"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

