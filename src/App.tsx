import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Layout, Smartphone } from 'lucide-react';
import imart from './utils/imart.png';
import realtime from './utils/realtime.png';
import auth from './utils/auth.png';
import recipes from './utils/recipes.png';
import concord from './utils/concord.png';

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
      title: "Concord - Sistema de Chat",
      description: "Sistema Web de chat baseado no Disord.",
      link: "https://www.linkedin.com/posts/gabrielfel1x_concord-sistema-web-de-chat-inspirado-no-activity-7322590425398030336-oQzo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_vjZkBeYjKjlouVzeq0JXBHoyOjNmn2gc",
      image: concord,
      tags: ["React", "TanStack Query", "TypeScript", "Ruby on Rails"]
    },
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
    <div className="min-h-screen bg-white text-gray-900">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-20"
      >
        <nav className="flex justify-between items-center mb-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gray-800"
          >
            Portfolio
          </motion.div>
          <div className="flex gap-6">
            <a href="https://www.github.com/gabrielfel1x" className="hover:text-gray-600 transition-colors"><Github /></a>
            <a href="https://www.linkedin.com/in/gabrielfel1x" className="hover:text-gray-600 transition-colors"><Linkedin /></a>
          </div>
        </nav>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-6xl font-bold mb-6 text-gray-900"
          >
            {displayText}
            <span className="border-r-2 border-gray-900 ml-1 animate-pulse"></span>
          </motion.h1>
          <h2 className="text-4xl font-bold mb-6 text-gray-700">
            Front-End Developer
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sou um desenvolvedor dedicado e estou sempre buscando oportunidades para me aprimorar.
          </p>
          <div className="flex justify-center gap-4">
            <motion.p 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-row gap-8 px-8 py-3 border-2 border-gray-200 rounded-full font-semibold transition-colors hover:bg-gray-100"
            ><Mail className="text-gray-600" />
              gabrielfelxx@gmail.com
            </motion.p>
          </div>
        </motion.div>
      </motion.header>

      <div className="py-12 bg-gray-50 overflow-hidden">
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
              className="mx-8 text-2xl font-bold text-gray-400"
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
              { icon: <Code size={32} className="text-gray-700" />, title: "Desenvolvimento Front-End", desc: "React, Vue, TypeScript" },
              { icon: <Layout size={32} className="text-gray-700" />, title: "Design Responsivo", desc: "Mobile-First, Adaptive UI" },
              { icon: <Palette size={32} className="text-gray-700" />, title: "Desenvolvimento de UI", desc: "Tailwind CSS, SCSS" },
              { icon: <Smartphone size={32} className="text-gray-700" />, title: "Desenvolvimento Mobile", desc: "React Native" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-gray-700 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Projetos em destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-3 py-1 text-sm bg-gray-100 rounded-full border border-gray-200 ${tag === "Ruby on Rails" ? 'opacity-40' : '' }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
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
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Experiências</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                    <p className="text-lg text-gray-700">{exp.company}</p>
                    {/* Lista de tecnologias */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-gray-100 rounded-full border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500">{exp.period}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Vamos trabalhar juntos</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Procurando um desenvolvedor front-end para dar vida à sua visão? Vamos criar algo incrível juntos.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <motion.a
                href="mailto:gabrielfelxx@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-800 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
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
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-800 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
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
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-800 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
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