import { motion } from "framer-motion";

const About = () => (
  <section className="pt-32 py-32 px-4 text-center bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      <h1 className="text-6xl font-bold mb-8 text-red-400">About Me</h1>

      <p className="text-xl mb-12 leading-relaxed text-gray-300">
        I’m <span className="font-semibold text-white">Saloni Patel</span>, a{" "}
        <span className="text-red-400">Software Engineer</span> passionate about building{" "}
        intelligent, scalable, and user-centered digital products. With expertise in{" "}
        <span className="font-semibold">Node.js, React, and Python</span>, I focus on creating
        modern, high-performance web applications that solve real-world problems through
        clean architecture and smart automation.
      </p>

      <p className="text-lg mb-12 leading-relaxed text-gray-400">
        I’ve interned at <span className="text-white font-semibold">Atul Ltd</span> and{" "}
        <span className="text-white font-semibold">TatvaSoft</span>, where I built production-ready
        solutions—from automating HR workflows and implementing secure authentication systems
        to optimizing API performance and UI responsiveness. My current interests lie in
        integrating <span className="text-red-400">AI and data-driven intelligence</span> into
        scalable SaaS applications using frameworks like TensorFlow, Streamlit, and OpenCV.
      </p>

      <h2 className="text-3xl font-semibold mb-8 text-white">Tech Stack & Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
        {[
          "React",
          "Node.js",
          "Python",
          "Django",
          "Flask",
          "Angular",
          "JavaScript",
          "TypeScript",
          "C++",
          "C",
          "Java",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "PostgreSQL",
          "MongoDB",
          "Firebase",
          "TensorFlow",
          "OpenCV",
          "Streamlit",
          "Power BI",
          "Git",
          "Docker",
          "Jenkins",
          "Chef",
          "Selenium",
          "REST APIs",
          "Agile Development",
          "Problem Solving"
        ].map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="p-5 bg-white/10 rounded-2xl backdrop-blur-md hover:bg-red-500/20 transition duration-200"
          >
            <span className="text-lg font-semibold text-white">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
