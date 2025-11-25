import { motion } from "framer-motion";

export default function Skills() {
  const skillSet = [
    { name: "React", level: 70 },
    { name: "Express.js", level: 65 },
    { name: "Java", level: 75 },
    { name: "Spring Boot", level: 60 },
    { name: "Computer Networks", level: 70 },
    { name: "Data Structures & Algorithms", level: 65 },
    { name: "MySQL", level: 70 },
    { name: "MongoDB", level: 65 },
  ];

  return (
    <section id="skills" className="mt-20">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {skillSet.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
