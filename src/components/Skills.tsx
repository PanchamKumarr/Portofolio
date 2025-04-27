import React from 'react';
import { motion } from 'framer-motion';

// Import all logos
import cppLogo from '../assets/Logo/cpp_logo.png';
import javaLogo from '../assets/Logo/java_logo.png';
import swiftLogo from '../assets/Logo/swift_logo.png';
import pythonLogo from '../assets/Logo/python_logo.png';
import javascriptLogo from '../assets/Logo/js_logo.png';
import rLogo from '../assets/Logo/R_logo.png';
import kotlinLogo from '../assets/Logo/Kotlin_logo.png';

import dsLogo from '../assets/Logo/datastructures_logo.png';
import algoLogo from '../assets/Logo/algorithm_logo.png';
import dbmsLogo from '../assets/Logo/dbms_logo.png';
import osLogo from '../assets/Logo/OS_logo.png';
import cnLogo from '../assets/Logo/cn_logo.png';
import oopLogo from '../assets/Logo/oop_logo.png';

import openaiLogo from '../assets/Logo/openai_logo.png';
import restapiLogo from '../assets/Logo/restapi_logo.png';
import jsonLogo from '../assets/Logo/json_logo.png';

import mernLogo from '../assets/Logo/mernstack_logo.png';
import flutterLogo from '../assets/Logo/flutter_logo.png';
import kmpLogo from '../assets/Logo/kmp_logo.png';

import gitLogo from '../assets/Logo/git_logo.png';
import dockerLogo from '../assets/Logo/docker_logo.png';
import tableauLogo from '../assets/Logo/tableau_logo.png';
import powerbiLogo from '../assets/Logo/PowerBI_logo.png';

// Map skill names to logos
const skillLogos: Record<string, string> = {
  'C++': cppLogo,
  'Java': javaLogo,
  'Swift': swiftLogo,
  'Python': pythonLogo,
  'JavaScript': javascriptLogo,
  'R': rLogo,
  'Kotlin': kotlinLogo,
  'Data Structures': dsLogo,
  'Algorithms': algoLogo,
  'DBMS': dbmsLogo,
  'OS': osLogo,
  'CN': cnLogo,
  'OOP': oopLogo,
  'OpenAI API': openaiLogo,
  'REST APIs': restapiLogo,
  'JSON': jsonLogo,
  'MERN Stack': mernLogo,
  'Flutter': flutterLogo,
  'KMP': kmpLogo,
  'Git': gitLogo,
  'Docker': dockerLogo,
  'Tableau': tableauLogo,
  'PowerBI': powerbiLogo,
};

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C++', 'Java', 'Swift', 'Python', 'JavaScript', 'R', 'Kotlin']
  },
  {
    title: 'CS Fundamentals',
    skills: ['Data Structures', 'Algorithms', 'DBMS', 'OS', 'CN', 'OOP']
  },
  {
    title: 'API Development & Integration',
    skills: ['OpenAI API', 'REST APIs', 'JSON']
  },
  {
    title: 'Web & App Development',
    skills: ['MERN Stack', 'Flutter', 'KMP']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'Tableau', 'PowerBI']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gray-700 mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full border border-gray-700 hover:bg-gray-700 transition-colors duration-200"
                    >
                      <img src={skillLogos[skill]} alt={`${skill} logo`} className="w-5 h-5" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
