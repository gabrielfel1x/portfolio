import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { useInView } from 'react-intersection-observer';
import me from '../utils/me.jpeg';

const HeroSection = () => {
  const name = "Gabriel Felix";
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [showParticles, setShowParticles] = useState(true);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setShowParticles(latest < 300);
    });

    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = name;

      setDisplayText(prev => 
        isDeleting 
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, name]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden dark:bg-gray-900">
      <ParticleBackground visible={showParticles} />
      
      <div className="container mx-auto px-4 z-10">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-left"
            >
              <motion.h1 
                className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white relative"
              >
                {displayText}
                <span className="border-r-2 border-gray-900 dark:border-white ml-1 animate-pulse"></span>
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-700 dark:text-gray-300"
              >
                Software Developer
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
              >
                Focado em entregar valor e impulsionar o crescimento contínuo. Sempre em busca de novos desafios.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <motion.a
                  href="mailto:gabrielfelxx@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-3 rounded-full bg-gray-800 text-white dark:bg-white dark:text-gray-900 shadow-lg hover:shadow-xl transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Entrar em contato
                </motion.a>
                
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  Ver projetos
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ y, opacity } as never}
              className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
            >
              <img
                src={me}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll</span>
        <div className="w-5 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.2, 1, 0.2]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5 
            }}
            className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;