import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 w-full max-w-3xl"
        >
          <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 relative">
            Vamos Trabalhar Juntos
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Estou disponível para novos desafios e oportunidades. Entre em contato!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="w-full max-w-2xl text-center"
        >
          <motion.div variants={item} className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Entre em contato</h3>
            <p className="text-base sm:text-lg text-gray-300">
              Tem um projeto em mente ou uma oportunidade para discutir? Estou disponível para freelance, projetos de médio a longo prazo ou posições de período integral.
            </p>
          </motion.div>

          <motion.div 
            variants={item} 
            className="flex flex-col items-center space-y-4 sm:space-y-6"
          >
            <div className="flex flex-row items-center gap-4 w-full max-w-xs">
              <div className="p-3 bg-gray-800 rounded-lg">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-start">Email</h4>
                <a 
                  href="mailto:gabrielfelxx@gmail.com" 
                  className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors"
                >
                  gabrielfelxx@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4 w-full max-w-xs">
              <div className="p-3 bg-gray-800 rounded-lg">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-start">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/gabrielfel1x" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/gabrielfel1x
                </a>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4 w-full max-w-xs">
              <div className="p-3 bg-gray-800 rounded-lg">
                <Github className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-start">GitHub</h4>
                <a 
                  href="https://github.com/gabrielfel1x" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  github.com/gabrielfel1x
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;