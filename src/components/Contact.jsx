// Contact.js
import { motion } from "framer-motion";

function Contact() {
  return (
    <div id="contact" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-6">
      <motion.h1 
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl text-center text-white"
      >
        <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Get in Touch
        </span>
      </motion.h1>

      <motion.p 
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-lg font-semibold text-gray-500 text-center"
      >
        Want to chat? Send me an E-mail through this button and I'll respond whenever I can.
      </motion.p>

      <motion.a 
        href="mailto:moteeullahazmi@gmail.com" 
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
      >
        Contact me
      </motion.a>
    </div>
  );
}

export default Contact;
