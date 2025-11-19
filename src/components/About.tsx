import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React", "Angular.js", "Node.js", "Python", "Flask", "Django",
    "JavaScript", "TypeScript", "C++", "Java", "C",
    "HTML5", "CSS3", "Tailwind CSS",
    "PostgreSQL", "MySQL", "MongoDB", "SQLite",
    "TensorFlow", "PyTorch", "OpenCV", "NumPy", "Pandas",
    "Streamlit", "Power BI", "Git", "Docker", "Jenkins",
    "Selenium", "REST APIs", "Data Structures", "Algorithms", "System Design"
  ];

  return (
    <section className="pt-24 pb-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-center mb-16 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl md:text-2xl text-center mb-16 leading-relaxed text-gray-200 max-w-4xl mx-auto"
        >
          I'm <span className="font-bold text-white">Saloni Patel</span>, a passionate{" "}
          <span className="text-red-400 font-bold">Software Engineer</span> specializing in{" "}
          <span className="font-semibold">full-stack development</span> and{" "}
          <span className="font-semibold">AI-powered solutions</span>.
        </motion.p>

        {/* Main Content */}
        <div className="space-y-12 text-lg md:text-xl leading-relaxed text-gray-300 max-w-5xl mx-auto">
          {[
            "I’ve completed Software Development internships at Atul Ltd and TatvaSoft, contributing to production-grade HR automation systems, secure authentication platforms, community portals, and ticket management tools.",
            "I led a research project titled “Vehicle Detection, Classification & Counting Using Deep Learning” using YOLOv5, DeepSORT, and OpenCV — presented at SDSTD 2025 International Conference and accepted for publication.",
            "I graduated with a B.E. in Information Technology from G H Patel College of Engineering and Technology (GCET) with a CGPA of 8.9/10.",
            "I was an SSIP Hackathon 2023 Finalist for a school registration portal under the Government of Gujarat.",
            "I built a social impact IoT solution to enhance sensitivity and communication for 50+ children with autism  — in collaboration with Mittra Rehabilitation Trust.",
            "I love turning complex problems into elegant, scalable, and meaningful digital solutions."
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/30 transition"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Tech Stack & Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                  borderColor: "#ef4444"
                }}
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
              >
                <span className="font-bold text-white text-base md:text-lg group-hover:text-red-300 transition">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Touch */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20 text-xl italic text-gray-400"
        >
          Building the future, one line of code at a time.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
