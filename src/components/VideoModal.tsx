import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  videoUrl: string | null;
  onClose: () => void;
}

const VideoModal = ({ videoUrl, onClose }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // 🔹 Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // 🔹 Pause video when closing
  useEffect(() => {
    if (!videoUrl && videoRef.current) videoRef.current.pause();
  }, [videoUrl]);

  if (!videoUrl) return null;

  // 🔹 Detect if it's a YouTube link
  const isYouTube =
    videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

  // 🔹 Convert normal YouTube URLs to embeddable ones
  const getEmbedUrl = (url: string) => {
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    } else if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          key="modal"
          className="relative bg-neutral-900 rounded-2xl p-4 max-w-4xl w-[90%] shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 15 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute -top-3 -right-3 bg-red-600 hover:bg-red-500 text-white text-lg w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
          >
            ✕
          </button>

          {isYouTube ? (
            <iframe
              src={getEmbedUrl(videoUrl)}
              className="w-full h-[480px] rounded-xl bg-black"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <video
              ref={videoRef}
              controls
              autoPlay
              className="w-full h-[480px] rounded-xl bg-black"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
