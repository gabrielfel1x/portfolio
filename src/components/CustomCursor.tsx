import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mousePosition = useMousePosition();

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 border border-gray-800 dark:border-white rounded-full pointer-events-none z-[9999]"
        variants={variants}
        animate="default"
        transition={{ type: 'spring', damping: 20, mass: 0.6 }}
      />
      <motion.div 
        className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-gray-800 dark:bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'spring', damping: 30, mass: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;