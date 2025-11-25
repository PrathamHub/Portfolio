import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full py-6 z-50">
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-3xl font-extrabold tracking-wider bg-gradient-to-r 
            from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          PB
        </motion.h1>

        {/* DESKTOP MENU */}
        <div
          className="hidden md:flex gap-10 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-2xl 
            border border-white/20 shadow-[0_0_35px_rgba(255,255,255,0.15)] text-lg font-medium"
        >
          {["Skills", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className="relative group transition cursor-pointer"
            >
              <span className="group-hover:text-purple-300">{item}</span>

              {/* underline */}
              <span
                className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r
                  from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"
              ></span>
            </motion.a>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block w-7 h-[3px] bg-white rounded"></span>
            <span className="block w-7 h-[3px] bg-white rounded"></span>
            <span className="block w-7 h-[3px] bg-white rounded"></span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 mx-8 px-6 py-5 rounded-2xl bg-white/10 
              backdrop-blur-xl border border-white/20 shadow-lg text-lg"
          >
            <div className="flex flex-col gap-4">
              {["Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block py-1 hover:text-purple-300 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
