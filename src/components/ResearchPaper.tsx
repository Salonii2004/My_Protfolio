import { motion } from "framer-motion";
import { ExternalLink, Award, FileText } from "lucide-react";

const ResearchPaper = () => {
  const technologies = [
    "YOLOv5",
    "DeepSORT",
    "OpenCV",
    "Python",
    "NumPy",
    "Pandas",
    "Streamlit",
    "Deep Learning",
    "Computer Vision",
  ];

  return (
    <section className="pt-24 pb-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Research Publication
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-200 leading-tight">
            Vehicle Detection, Classification & Counting
            <br />
            Using Deep Learning
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-lg text-gray-400">
            <Award className="w-6 h-6 text-yellow-500" />
            <span>
              Presented at{" "}
              <strong className="text-white">SDSTD 2025 International Conference</strong>
            </span>
          </div>
          <p className="mt-2 text-gray-400">
            Accepted for publication in{" "}
            <strong className="text-white">Victorious Publications</strong>
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-4xl font-bold text-red-400 mb-6">Project Overview</h2>
          <p className="text-xl leading-relaxed text-gray-300">
            Developed a real-time intelligent traffic monitoring system using state-of-the-art deep learning techniques.
            The system accurately detects, classifies, tracks, and counts vehicles under challenging conditions —
            enabling smarter urban traffic management and data-driven city planning.
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-red-500/10 border border-red-500/30 rounded-3xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-red-300 mb-5">Research Challenge</h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Traditional traffic systems fail in dense, dynamic environments due to occlusion, lighting changes,
            and high vehicle density. Manual monitoring is inefficient and unscalable. This work introduces
            a robust AI-powered solution that performs reliably in real-world traffic scenarios.
          </p>
        </motion.div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-red-400 mb-12">Methodology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Detection", tech: "YOLOv5", desc: "Ultra-fast multi-object detection" },
              { title: "Tracking", tech: "DeepSORT", desc: "Persistent ID assignment across frames" },
              { title: "Classification & Counting ", tech: "Custom Logic", desc: "Accurate entry/exit counting with virtual lines" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 text-center hover:border-red-500/50 transition"
              >
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-400">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-red-400 font-semibold">{item.tech}</p>
                <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-900/20 to-pink-900/20 border border-red-500/30 rounded-3xl p-10 mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-red-300 mb-10">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            {[
              "92%+ Detection Accuracy",
              "Robust in Low Light & Rain",
              "Real-time Performance (20+ FPS)",
              "Multi-class Classification",
              "Stable Tracking (DeepSORT)",
              "Accurate Counting Logic",
            ].map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-black/40 rounded-xl p-5"
              >
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-gray-200 font-medium">{result}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.3)" }}
                className="px-6 py-3 bg-red-500/20 border border-red-500/40 text-red-300 rounded-full font-semibold text-sm md:text-base transition"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Resources & Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl font-bold text-red-400">Official Resources</h2>
          <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
            <a
              href="https://drive.google.com/file/d/1fvL1_j0JWYpQw3vtTfP2hSvR807dmuQD/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-xl font-bold text-red-400 hover:text-red-300 transition"
            >
              <Award className="w-8 h-8" />
              View Conference Certificate
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>

            <a
              href="https://drive.google.com/file/d/1a6l3JjggFMx257pqX6MXti60TRJ3ohe3/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-xl font-bold text-pink-400 hover:text-pink-300 transition"
            >
              <FileText className="w-8 h-8" />
              Research Paper (Victorious Publications)
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>

            {/* Add GitHub when ready */}
            {/* <a
              href="#"
              className="group flex items-center gap-4 text-xl font-bold text-gray-400 hover:text-white transition"
            >
              <Github className="w-8 h-8" />
              View Source Code on GitHub
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchPaper;
