import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'Lovely Professional University, Punjab',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      duration: 'Aug 2022–Present',
      details: 'CGPA: 7.8/10'
    },
    {
      institution: 'Gurukul Kurukshetra, Haryana',
      degree: 'Higher Secondary Education',
      duration: '2020-2022',
      details: 'Percentage: 84%'
    },
    {
      institution: 'Gurukul Public School, Uttar Pradesh',
      degree: 'Secondary Education',
      duration: '2018-2020',
      details: 'Percentage: 79%'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gray-700 mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-700 rounded-full">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                    <p className="text-gray-400 mt-1">{edu.degree}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-blue-400">{edu.duration}</span>
                      <span className="text-gray-300">{edu.details}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 