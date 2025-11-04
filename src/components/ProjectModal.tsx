import { motion, AnimatePresence } from "framer-motion";
import { Github, PlayCircle } from "lucide-react"; // nice icons

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    description: string;
    tech: string[];
    howItWorks: string;
    github?: string;
    video?: string;
  } | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-[#0f0f0f] text-white p-8 rounded-2xl max-w-2xl w-[90%] shadow-2xl relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-red-500"
            onClick={onClose}
          >
            ✕
          </button>

          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          <h3 className="text-xl font-semibold mb-2">How It Works</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            {project.howItWorks}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-red-600/40 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* ✅ GitHub & Video Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-all"
              >
                <Github size={18} />
                <span>GitHub Repo</span>
              </a>
            )}

            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 rounded-full transition-all"
              >
                <PlayCircle size={18} />
                <span>Live Demo / Video</span>
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
