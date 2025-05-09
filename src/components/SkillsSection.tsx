import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillsBackground from './SkillsBackground';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  color: string;
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'frontend', color: '#61DAFB' },
    { name: 'Vue.js', level: 95, category: 'frontend', color: '#42b883' },
    { name: 'TypeScript', level: 85, category: 'frontend', color: '#3178C6' },
    { name: 'JavaScript', level: 92, category: 'frontend', color: '#F7DF1E' },
    { name: 'Next.js', level: 80, category: 'frontend', color: '#000000' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend', color: '#38B2AC' },
    { name: 'SCSS', level: 85, category: 'frontend', color: '#CC6699' },
    { name: 'React Native', level: 75, category: 'frontend', color: '#61DAFB' },
    { name: 'Python', level: 70, category: 'backend', color: '#3776AB' },
    { name: 'Node.js', level: 50, category: 'backend', color: '#339933' },
    { name: 'Flask', level: 65, category: 'backend', color: '#000000' },
    { name: 'Django', level: 60, category: 'backend', color: '#092E20' },
    { name: 'Firebase', level: 75, category: 'backend', color: '#FFCA28' },
    { name: 'Git', level: 85, category: 'tools', color: '#F05032' },
    { name: 'Figma', level: 80, category: 'tools', color: '#F24E1E' },
    { name: 'TanStack Query', level: 80, category: 'frontend', color: '#FF4500' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
      <SkillsBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            Minhas Habilidades
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tecnologias e ferramentas com as quais trabalho
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12 space-x-4"
          >
            {[
              { id: 'all', label: 'Todas' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend' },
              { id: 'tools', label: 'Ferramentas' }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as never)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-900'
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span 
                      className="h-3 w-3 rounded-full mr-2" 
                      style={{ backgroundColor: skill.color }}
                    ></span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color } as never}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Atualmente estudando</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { name: 'Ruby on Rails', color: '#CC0000' },
              { name: 'React Server Components', color: '#61DAFB' },
              { name: 'Testing Library', color: '#FF4785' },
              { name: 'Cypress', color: '#17202C' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="px-4 py-2 rounded-full text-white text-sm font-medium flex items-center"
                style={{ backgroundColor: tech.color } as never}
              >
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;