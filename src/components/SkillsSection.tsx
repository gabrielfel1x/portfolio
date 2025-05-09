import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Icon } from '@iconify/react';

type Skill = {
  name: string;
  icon: string;
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
    { name: 'React', icon: 'logos:react', category: 'frontend', color: '#61DAFB' },
    { name: 'Vue.js', icon: 'logos:vue', category: 'frontend', color: '#42b883' },
    { name: 'TypeScript', icon: 'logos:typescript-icon', category: 'frontend', color: '#3178C6' },
    { name: 'JavaScript', icon: 'logos:javascript', category: 'frontend', color: '#F7DF1E' },
    { name: 'Next.js', icon: 'logos:nextjs-icon', category: 'frontend', color: '#000000' },
    { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', category: 'frontend', color: '#38B2AC' },
    { name: 'SCSS', icon: 'logos:sass', category: 'frontend', color: '#CC6699' },
    { name: 'React Native', icon: 'logos:react', category: 'frontend', color: '#61DAFB' },
    { name: 'Python', icon: 'logos:python', category: 'backend', color: '#3776AB' },
    { name: 'Node.js', icon: 'logos:nodejs-icon', category: 'backend', color: '#339933' },
    { name: 'Flask', icon: 'logos:flask', category: 'backend', color: '#000000' },
    { name: 'Django', icon: 'logos:django-icon', category: 'backend', color: '#092E20' },
    { name: 'Firebase', icon: 'logos:firebase', category: 'backend', color: '#FFCA28' },
    { name: 'Git', icon: 'logos:git-icon', category: 'tools', color: '#F05032' },
    { name: 'Figma', icon: 'logos:figma', category: 'tools', color: '#F24E1E' },
    { name: 'VS Code', icon: 'logos:visual-studio-code', category: 'tools', color: '#007ACC' },
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

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
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

        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center mb-12 gap-4"
          >
            {[
              { id: 'all', label: 'Todas' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend' },
              { id: 'tools', label: 'Ferramentas' }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as 'all' | 'frontend' | 'backend' | 'tools')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-900 shadow-lg'
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
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                className="flex flex-col items-center gap-4"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 md:w-20 md:h-20"
                >
                  <Icon icon={skill.icon} className="w-full h-full" />
                </motion.div>
                <p className="text-gray-800 dark:text-gray-200 font-medium text-center">
                  {skill.name}
                </p>
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
              { name: 'Ruby on Rails', icon: 'logos:rails', color: '#CC0000' },
              { name: 'React Server Components', icon: 'logos:react', color: '#61DAFB' },
              { name: 'Testing Library', icon: 'simple-icons:testinglibrary', color: '#FF4785' },
              { name: 'Cypress', icon: 'logos:cypress', color: '#17202C' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800"
              >
                <Icon icon={tech.icon} className="w-5 h-5" />
                <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;