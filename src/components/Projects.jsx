import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Study Notion",
    desc: "Full-featured learning platform for creating, buying, and selling courses.",
    tech: ["React", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/your-username/study-notion",
    live: "https://your-live-link.com",
  },
  {
    id: 2,
    title: "Fena Billing System",
    desc: "End-to-end billing + credit management system deployed for real shops.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/your-username/fena-billing",
    live: "https://btc-1-3i51.onrender.com",
  },
  {
    id: 3,
    title: "BTC Customer Management System",
    desc: "Customer tracking, billing, and analytics solution.",
    tech: ["React", "Spring Boot", "MySQL"],
    github: "https://github.com/your-username/btc-customer-system",
    live: "",
  },
  {
    id: 4,
    title: "Airbnb Clone",
    desc: "A modern Airbnb UI/UX clone with responsive design.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/your-username/airbnb-clone",
    live: "",
  },
  {
    id: 5,
    title: "Refokus Clone",
    desc: "Smooth animated landing page inspired by Refokus.",
    tech: ["React", "GSAP", "Framer Motion"],
    github: "https://github.com/your-username/refokus-clone",
    live: "",
  },
  {
    id: 6,
    title: "Shopify Clone",
    desc: "E-commerce storefront replication with cart & product pages.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/your-username/shopify-clone",
    live: "",
  },
  {
    id: 7,
    title: "Chatbot",
    desc: "AI-powered chat interface using OpenAI API.",
    tech: ["React", "Node.js", "OpenAI API"],
    github: "https://github.com/your-username/chatbot",
    live: "",
  },
  {
    id: 8,
    title: "Book Store",
    desc: "Book listing, search, filters, and cart system.",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/your-username/book-store",
    live: "",
  },
  {
    id: 9,
    title: "Ecommerce MERN",
    desc: "Complete MERN e-commerce app with auth and cart.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/your-username/ecommerce-mern",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-20">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 opacity-80">{p.desc}</p>

            <div className="mt-4 flex gap-2 flex-wrap">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-md bg-black/20 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-5 flex gap-3">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm px-3 py-1 rounded-md bg-black/30 border border-white/10 hover:bg-black/40 transition"
                >
                  <Github size={14} /> Code
                </a>
              )}

              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm px-3 py-1 rounded-md bg-black/30 border border-white/10 hover:bg-black/40 transition"
                >
                  <ExternalLink size={14} /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
