import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-400 mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          <motion.div
            className="prose prose-lg max-w-none text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-6">
              I am a passionate software developer with a strong foundation in web development and problem-solving. 
              My journey in technology began with a curiosity about how things work, which led me to explore 
              various programming languages and frameworks.
            </p>
            
            <p className="mb-6">
              I specialize in building modern web applications using technologies like React, Node.js, and TypeScript. 
              My approach to development combines clean code practices with a focus on user experience and performance.
            </p>
            
            <p className="mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or working on personal projects that challenge my skills and creativity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;