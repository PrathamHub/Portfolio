import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Pratham Bagrecha
          </span>
        </h1>

        <p className="mt-4 text-lg opacity-80 max-w-lg">
          I'm a Frontend Developer building beautiful, fast and modern web
          experiences using React, Tailwind and Framer Motion.
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10"
          >
            Hire Me
          </a>

          {/* DOWNLOAD RESUME BUTTON */}
          <a
            href="/pratham-resume.pdf"
            download="Pratham-Resume.pdf"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* RIGHT ANIMATION CIRCLE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 blur-lg opacity-60 animate-pulse"></div>
      </motion.div>
    </section>
  );
}
