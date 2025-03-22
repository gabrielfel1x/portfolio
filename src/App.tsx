import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Layout, Smartphone } from 'lucide-react';
import imart from './utils/imart.png';
import realtime from './utils/realtime.png';
import auth from './utils/auth.png';
import recipes from './utils/recipes.png';

function App() {
  const name = "Gabriel Felix";

  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

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
  
  const technologies = [
    "JavaScript", "TypeScript", "Vue", "React", "Next.js", "React Native",
    "Python", "Flask", "Django", "Firebase", "MySQL", "PostgreSQL",
    "Tailwind CSS", "SCSS", "JavaScript", "TypeScript", "Vue", "React",
    "Next.js", "React Native", "Python", "Flask", "Django", "Firebase",
    "MySQL", "PostgreSQL", "Tailwind CSS", "SCSS"
  ];

  const projects = [
    {
      title: "iMart - Market System",
      description: "Sistema Web e Mobile para gestão moderna e integrada de supermercados.",
      link: "https://www.linkedin.com/posts/gabrielfel1x_imart-sistema-web-mobile-para-mercados-activity-7257359859577196544-dusc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_vjZkBeYjKjlouVzeq0JXBHoyOjNmn2gc",
      image: imart,
      tags: ["React", "React Native", "TypeScript", "Ruby on Rails"]
    },
    {
      title: "Real-Time Chat App",
      description: "Chat em tempo real com Vue.js, TypeScript e Firebase Realtime Database.",
      link: "https://www.linkedin.com/posts/gabrielfel1x_chat-em-tempo-real-com-vuejs-em-meu-%C3%BAltimo-activity-7203754988794220549-uBsV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_vjZkBeYjKjlouVzeq0JXBHoyOjNmn2gc",
      image: realtime,
      tags: ["Vue.js", "TypeScript", "Firebase"]
    },
    {
      title: "Firebase Auth com Vue.js",
      description: "Sistema de autenticação web com Vue.js, TypeScript, Firebase e suporte a internacionalização (i18n).",
      link: "https://www.linkedin.com/posts/gabrielfel1x_atualiza%C3%A7%C3%B5es-no-meu-projeto-de-autentica%C3%A7%C3%A3o-activity-7196456288866701312-yCnO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_vjZkBeYjKjlouVzeq0JXBHoyOjNmn2gc",
      image: auth,
      tags: ["Vue.js", "TypeScript", "Firebase", "i18n"]
    },
    {
      title: "Recipes Explorer",
      description: "Aplicação web para explorar, filtrar e salvar receitas, com integração à TheMealDB API e suporte a temas.",
      link: "https://www.linkedin.com/posts/gabrielfel1x_recipes-explorer-aplica%C3%A7%C3%A3o-web-para-explora%C3%A7%C3%A3o-activity-7267509517733572612-ITIr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_vjZkBeYjKjlouVzeq0JXBHoyOjNmn2gc",
      image: recipes,
      tags: ["React.js", "TypeScript", "React Router", "Axios"]
    }    
  ];

  const experiences = [
    {
      company: "GC Solutions",
      position: "Frontend Developer",
      period: "ago de 2024 - o momento",
      description:
        "Atuo na refatoração do portal HemoDoador, do Governo do Estado do Ceará, modernizando e escalando o front-end com Vue.js e Quasar. Minhas atividades incluem desenvolvimento de interfaces responsivas, otimização de desempenho para alto volume de usuários, integração com API Node.js utilizando Pinia para gerenciamento de estado, além de melhorias de acessibilidade e HTML semântico. Participo ativamente do versionamento e da colaboração em equipe via Git/GitHub, seguindo a metodologia Scrum para garantir entregas ágeis e eficientes.",
      technologies: ["Vue.js", "PrimeVue", "Pinia", "Quasar", "TypeScript", "Git"]
    },
    {
      company: "PrimeTech",
      position: "Frontend Developer",
      period: "dez de 2023 - jan de 2025",
      description:
        "Atuo como Desenvolvedor FrontEnd na PrimeTech, empresa júnior da Universidade Federal do Ceará - Campus Jardins de Anita. Contribuo para o crescimento da empresa desenvolvendo soluções tecnológicas de alta qualidade com foco em inovação, utilizando Next.js e React.js em projetos que impactam clientes e parceiros.",
      technologies: ["Vue.js", "React", "Next.js", "Firebase", "TypeScript", "Flask", "Git"]
    }
  ];  

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000] via-[#00111f] to-[#000] text-white">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-20"
      >
        <nav className="flex justify-between items-center mb-16">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#00BFFF]"
          >
            Portfolio
          </motion.div>
          <div className="flex gap-6">
            <a href="https://www.github.com/gabrielfel1x" className="hover:text-[#00FFFF] transition-colors"><Github /></a>
            <a href="https://www.linkedin.com/in/gabrielfel1x" className="hover:text-[#00FFFF] transition-colors"><Linkedin /></a>
          </div>
        </nav>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#00BFFF]"
          >
            {displayText}
            <span className="border-r-2 border-[#00FFFF] ml-1 animate-pulse"></span>
          </motion.h1>
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#00BFFF]">
            Front-End Developer
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Sou um desenvolvedor dedicado e estou sempre buscando oportunidades para me aprimorar.
          </p>
          <div className="flex justify-center gap-4">
            <motion.p 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-row gap-8 px-8 py-3 border-2 border-none rounded-full font-semibold transition-colors"
            ><Mail />
              gabrielfelxx@gmail.com
            </motion.p>
          </div>
        </motion.div>
      </motion.header>

      <div className="py-20 bg-[#00111f]/50 overflow-hidden">
        <motion.div 
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="mx-8 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#00BFFF]"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { icon: <Code size={32} />, title: "Desenvolvimento Front-End", desc: "React, Vue, TypeScript" },
              { icon: <Layout size={32} />, title: "Design Responsivo", desc: "Mobile-First, Adaptive UI" },
              { icon: <Palette size={32} />, title: "Desenvolvimento de UI", desc: "Tailwind CSS, SCSS" },
              { icon: <Smartphone size={32} />, title: "Desenvolvimento Mobile", desc: "React Native" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#00111f] to-transparent border border-[#00FFFF]/30"
              >
                <div className="text-[#00FFFF] mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#000f1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Projetos em destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#00111f] to-transparent border border-[#00FFFF]/30"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-[#00FFFF]/10 rounded-full border border-[#00FFFF]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-[#00FFFF] hover:text-[#00BFFF]"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    Demonstração <ExternalLink size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Experiências</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#00111f] to-transparent border border-[#00FFFF]/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#00FFFF]">{exp.position}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                    {/* Lista de tecnologias */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-[#00FFFF]/10 rounded-full border border-[#00FFFF]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Vamos trabalhar juntos</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Procurando um desenvolvedor front-end para dar vida à sua visão? Vamos criar algo incrível juntos.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <motion.a
                href="mailto:gabrielfelxx@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-[#00FFFF] rounded-lg text-[#00FFFF] hover:bg-[#00FFFF]/10 transition-colors"
              >
                <Mail size={20} />
                gabrielfelxx@gmail.com
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/gabrielfel1x"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-[#00FFFF] rounded-lg text-[#00FFFF] hover:bg-[#00FFFF]/10 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>

              <motion.a
                href="https://www.github.com/gabrielfel1x"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-[#00FFFF] rounded-lg text-[#00FFFF] hover:bg-[#00FFFF]/10 transition-colors"
              >
                <Github size={20} />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;