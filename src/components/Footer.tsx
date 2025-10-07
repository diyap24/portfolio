export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-100 dark:border-gray-900">
      <div className="container-max py-10 text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} DIYA PATEL. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/diyap24" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-gray-200">GitHub</a>
          <a href="https://www.linkedin.com/in/diya-patel-58639b210/" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-gray-200">LinkedIn</a>
          <a href="mailto:diyap25@example.com" className="hover:text-gray-900 dark:hover:text-gray-200">Email</a>
        </div>
      </div>
    </footer>
  );
}

