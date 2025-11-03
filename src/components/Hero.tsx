import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => (
  <section className="pt-32 pb-32 text-center px-4">
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent"
    >
      I build <span className="text-red-500">scalable</span>
      <br />
      intelligent web apps
      <span className="text-red-500">.</span>
    </motion.h1>
    
    <motion.p
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90"
    >
      Turning ideas into code that <span className="text-red-400">tells a story</span>.
    </motion.p>
    
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <motion.a
        href="#projects"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-red-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-red-500 transition-all shadow-2xl flex items-center justify-center"
      >
        View Projects <ArrowRight className="ml-2" />
      </motion.a>
      <motion.a
        href="/contact"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="border-2 border-red-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-red-600 transition-all"
      >
        Get In Touch
      </motion.a>
    </div>
  </section>
);

export default Hero;