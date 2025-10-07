export default function Section({ id, title, kicker, children }: { id?: string; title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="container-max py-16 sm:py-20">
      <div className="mb-8">
        {kicker && <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400">{kicker}</div>}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
}

