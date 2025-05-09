import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Calendar } from 'lucide-react';

type Experience = {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  expanded?: boolean;
};

const ExperienceSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: 1,
      company: "VIMAC Soluções",
      position: "Desenvolvedor Full Stack (Estagiário)",
      period: "nov de 2024 - o momento",
      description: "Atuo no desenvolvimento da plataforma IOTA, que integra gestão de dispositivos IoT, processamento em tempo real e dashboards customizáveis para empresas conectadas.",
      responsibilities: [
        "Desenvolvimento e otimização de interfaces interativas visando melhor usabilidade e performance",
        "Refatoração de módulos críticos em Django, garantindo escalabilidade e estabilidade",
        "Implementação de novas funcionalidades com foco nas demandas dos clientes",
        "Integração de tecnologias para processamento em tempo real e visualização de dados",
        "Colaboração com equipes multidisciplinares, utilizando metodologias ágeis (Scrum)"
      ],
      technologies: ["JavaScript", "Python", "Django", "Microsoft Azure"]
    },
    {
      id: 2,
      company: "GC Solutions",
      position: "Frontend Developer",
      period: "ago de 2023 - mai de 2025",
      description: "Refatoração e modernização do portal HemoDoador do Governo do Estado do Ceará.",
      responsibilities: [
        "Desenvolvimento de interfaces responsivas com Vue.js e Quasar",
        "Otimização de desempenho para alto volume de usuários",
        "Integração com API Node.js utilizando Pinia para gerenciamento de estado",
        "Implementação de melhorias de acessibilidade e HTML semântico",
        "Versionamento e colaboração em equipe via Git/GitHub",
        "Metodologia Scrum para garantir entregas ágeis e eficientes"
      ],
      technologies: ["Vue.js", "PrimeVue", "Pinia", "Quasar", "TypeScript", "Git"]
    }
  ]);

  const toggleExpand = (id: number) => {
    setExperiences(prevExperiences => 
      prevExperiences.map(exp => 
        exp.id === id ? { ...exp, expanded: !exp.expanded } : exp
      )
    );
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            Experiência Profissional
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Minha trajetória no desenvolvimento front-end
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                    {exp.id}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{exp.company}</h4>
                    </div>
                    
                    <button 
                      onClick={() => toggleExpand(exp.id)}
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-1 rounded-full transition-colors"
                      aria-label="Expand details"
                    >
                      <motion.div
                        animate={{ rotate: exp.expanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <AnimatePresence>
                    {exp.expanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Responsabilidades:</h5>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;