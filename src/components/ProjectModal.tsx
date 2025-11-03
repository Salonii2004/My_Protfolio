import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    description: string;
    tech: string[];
    howItWorks: string;
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
