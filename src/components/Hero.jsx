// Hero.js
import image from "../images/image.png"; // Ensure this path is correct
import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col min-h-screen w-full items-center justify-center py-20 px-4"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white max-w-2xl mx-auto"> {/* Adjust max-w as needed */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt="Profile"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-3 text-center w-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl"
          >
            Moteeullah Azmi
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl"
          >
            Full Stack Developer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-gray-400 md:text-base px-4 text-center"
          >
            I'm a Full Stack Developer specializing in the MERN stack and
            Tailwind CSS, dedicated to building scalable applications and
            dynamic user experiences. Let's build something great together!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
