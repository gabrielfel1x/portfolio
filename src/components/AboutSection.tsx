import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code, Globe, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="inline-block text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
              Sobre Mim
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Desenvolvedor de Software focado em criar experiências digitais de alta qualidade
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div variants={item} className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Meu nome é Gabriel Felix, e sou um desenvolvedor de software com experiência em criar aplicações web modernas e atraentes. 
                Especializado em tecnologias como React, Vue.js e TypeScript, estou comprometido em desenvolver interfaces intuitivas e responsivas que proporcionam uma experiência excepcional ao usuário.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Entusiasta por novas tecnologias e pela melhoria contínua de processos. Comprometido em gerar valor e promover o crescimento sustentável, sempre em busca de desafios que estimulem a inovação
              </p>

              <motion.div 
                className="grid grid-cols-2 gap-4 mt-8"
                variants={{
                  hidden: { opacity: 0 },
                  show: { 
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                {[
                  { icon: <Code size={20} />, text: "Desenvolvimento Web" },
                  { icon: <Globe size={20} />, text: "Aplicações Responsivas" },
                  { icon: <Lightbulb size={20} />, text: "Soluções Criativas" },
                  { icon: <Award size={20} />, text: "Código de Qualidade" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 }
                    }}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={item} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Formação & Educação</h3>
                
                <div className="space-y-8">
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Universidade Federal do Ceará</h4>
                    <p className="text-gray-600 dark:text-gray-400">Análise e Desenvolvimento de Sistemas</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2025 - Presente</p>
                  </div>
                  
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-purple-500 transform -translate-x-1/2"></div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Projeto impulso</h4>
                    <p className="text-gray-600 dark:text-gray-400">Mentoria de desenvolvimento em React, Ruby on Rails e GIT</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2023</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;