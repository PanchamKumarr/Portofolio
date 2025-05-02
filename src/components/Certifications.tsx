import React from 'react';
import { motion } from 'framer-motion';
import tableauCert from '../assets/certifications/tableau.png';
import mlCert from '../assets/certifications/ml.png';
import networkingCert from '../assets/certifications/networking.png';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  link: string; // <-- Add link field
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Data Analysis with Tableau",
      issuer: "Tableau Learning Partner",
      date: "Nov 7, 2024",
      image: tableauCert,
      description: "An online non-credit course authorized by Tableau Learning Partner",
      link: "https://coursera.org/verify/YD9YBIHTB4CP"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI and Stanford University",
      date: "Oct 16, 2024",
      image: mlCert,
      description: "An online non-credit course authorized by DeepLearning.AI and Stanford University",
      link: "https://coursera.org/verify/9L1JOMIS2SZ4"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "Apr 5, 2024",
      image: networkingCert,
      description: "An online non-credit course authorized by Google",
      link: "https://coursera.org/verify/B8MBNJAKF3FE"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Certifications
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-400 mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.a 
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4">
                      <h3 className="text-white text-lg font-semibold">{cert.title}</h3>
                      <p className="text-gray-200 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-400 text-sm mb-2">{cert.description}</p>
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
