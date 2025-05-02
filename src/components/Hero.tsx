import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400">
              <img 
                src={profileImage}
                alt="Pancham Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pancham Kumar
          </motion.h1>
          
          <motion.h2 
            className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about building intuitive, efficient, and scalable software applications. 
            Specialized in web development and algorithmic problem-solving.
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="https://github.com/PanchamKumarr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/pancham-5b1816251" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:pancham8256@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="https://drive.google.com/file/d/10MV_8_n68oHgpr08Q36otJWxenppMtJS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </a>
          </motion.div>

          <motion.a 
            href="#about" 
            className="inline-flex items-center justify-center p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
            aria-label="Scroll to About section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1
            }}
          >
            <ArrowDown size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;