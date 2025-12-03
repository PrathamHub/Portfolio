export default function Experience() {
  return (
    <section id="experience" className="mt-20">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div className="space-y-4">
        {/* Probitus */}
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
          <h3 className="font-semibold">Frontend Developer – Probitus</h3>

          <p className="mt-2 opacity-90">
            Maintained and enhanced the company website, optimized performance,
            updated UI components, and delivered clean responsive layouts.
            Collaborated with teams to improve design and fix production issues.
          </p>
        </div>

        {/* Octanet Ltd */}
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
          <h3 className="font-semibold">
            Frontend Developer Intern – Octanet Ltd
          </h3>

          <p className="mt-2 opacity-90">
            Developed multiple frontend projects including a weather app and
            reusable UI components using HTML, CSS, and JavaScript. Focused on
            responsive design and smooth user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
