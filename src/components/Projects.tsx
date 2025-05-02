import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import glizzetImage from '../assets/projects/glizzet.png';
import graphVisualImage from '../assets/projects/graph-visual.png';
import weatherDashboardImage from '../assets/projects/weather-dashboard.png';
import algorithmVisualizerImage from '../assets/projects/algorithm-visualizer.png';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  media: {
    type: 'image' | 'video';
    url: string;
  };
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Glizzet',
      description: 'A comprehensive project management tool with task tracking, team collaboration features, and real-time updates.',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/PanchamKumarr/Glizzet',
      demo: 'https://drive.google.com/file/d/1TcB7_dIUWkJxL1Ah7FNuZdx4fRkIloam/view?usp=sharing',
      media: {
        type: 'image',
        url: glizzetImage
      }
    },
    {
      title: 'Graph Visual',
      description: 'Interactive graph visualization tool that allows users to create, manipulate, and analyze graph structures with advanced algorithms.',
      tags: ['JavaScript', 'D3.js', 'Canvas API', 'Algorithms'],
      github: 'https://github.com/PanchamKumarr/Graph_Visual',
      demo: 'https://graphvisual-green.vercel.app/',
      media: {
        type: 'image',
        url: graphVisualImage
      }
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application that provides detailed forecasts, historical data, and beautiful visualizations of weather patterns.',
      tags: ['React', 'Weather API', 'Chart.js', 'Geolocation'],
      github: 'https://github.com/PanchamKumarr/weather_dashboard',
      demo: 'https://panchamkumarr.github.io/weather_dashboard/',
      media: {
        type: 'image',
        url: weatherDashboardImage
      }
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Educational tool that visualizes various sorting, searching, and graph algorithms to help users understand complex computer science concepts.',
      tags: ['JavaScript', 'HTML5 Canvas', 'Algorithms', 'Educational'],
      github: 'https://github.com/PanchamKumarr/Algorithm-Visualizer',
      demo: 'https://algorithm-visualizer-seven-sigma.vercel.app/',
      media: {
        type: 'image',
        url: algorithmVisualizerImage
      }
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
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-400 mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="group bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 overflow-hidden">
                  {project.media.type === 'video' ? (
                    <video 
                      src={project.media.url}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img 
                      src={project.media.url}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white bg-gray-900/80 hover:bg-gray-900 p-2 rounded-full transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                      
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white bg-blue-500/80 hover:bg-blue-500 p-2 rounded-full transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;