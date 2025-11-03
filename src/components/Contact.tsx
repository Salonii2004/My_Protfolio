import { motion } from 'framer-motion';

const Contact = () => (
  <section className="pt-32 py-32 px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="max-w-2xl mx-auto text-center"
    >
      <h1 className="text-6xl font-bold mb-8">Let's Build Together</h1>
      <p className="text-xl mb-12">Got a project? Let's talk.</p>
      <a
        href="mailto:patelsaloniu2004@gmail.com"
        className="inline-block bg-red-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-red-500 transition-all"
      >
        Saloni Patel
      </a>
    </motion.div>
  </section>
);

export default Contact;