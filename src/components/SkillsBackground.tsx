import { useTheme } from "../context/ThemeContext";

const SkillsBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(90deg, ${theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'} 1px, transparent 1px), linear-gradient(${theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'} 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
    </div>
  );
};

export default SkillsBackground;
