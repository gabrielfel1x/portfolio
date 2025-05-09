import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';
import concord from '../utils/concord.png';
import imart from '../utils/imart.png'
import recipesExplorer from '../utils/recipes.png';
import realTimeChat from '../utils/realtime.png';
import firebaseAuth from '../utils/auth.png';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link: string;
  repo: string;
  features: string[];
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Concord - Sistema de Chat",
      description: "Sistema Web de chat baseado no Discord.",
      longDescription: "O Concord é uma plataforma web de comunicação em tempo real inspirada no Discord. O sistema permite a criação de servidores, canais e conversas entre usuários, com funcionalidades como mensagens diretas, compartilhamento de arquivos e chamadas de vídeo.",
      image: concord,
      tags: ["React", "TanStack Query", "TypeScript", "Ruby on Rails"],
      link: "https://www.linkedin.com/posts/gabrielfel1x_concord-sistema-web-de-chat-inspirado-no-activity-7322590425398030336-oQzo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_vjZkBeYjKjlouVzeq0JXBHoyOjNmn2gc",
      repo: "https://github.com/gabrielfel1x/concord",
      features: [
        "Chat em tempo real usando Action Cable",
        "Criação e gerenciamento de servidores e canais",
        "Sistema de amizades e mensagens diretas",
        "Upload de imagens e arquivos",
        "Interface responsiva e intuitiva"
      ]
    },
    {
      id: 2,
      title: "iMart - Market System",
      description: "Sistema Web e Mobile para gestão moderna e integrada de supermercados.",
      longDescription: "O iMart é um sistema completo para a gestão de supermercados, composto por uma aplicação web administrativa e um aplicativo mobile para clientes. A plataforma permite gerenciar estoque, vendas, promoções e pedidos, além de oferecer um ambiente de compras online para os clientes.",
      image: imart,
      tags: ["React", "React Native", "TypeScript", "Ruby on Rails"],
      link: "https://www.linkedin.com/posts/gabrielfel1x_imart-sistema-web-mobile-para-mercados-activity-7257359859577196544-dusc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_vjZkBeYjKjlouVzeq0JXBHoyOjNmn2gc",
      repo: "https://github.com/gabrielfel1x/imart",
      features: [
        "Dashboard administrativo completo",
        "Aplicativo mobile para clientes",
        "Sistema de pagamentos integrado",
        "Gestão de estoque e promoções",
        "Relatórios e análises de vendas"
      ]
    },
    {
      id: 3,
      title: "Real-Time Chat App",
      description: "Chat em tempo real com Vue.js, TypeScript e Firebase Realtime Database.",
      longDescription: "Um aplicativo de chat em tempo real desenvolvido com Vue.js e Firebase, permitindo comunicação instantânea entre usuários. O sistema inclui recursos como status de presença, notificações e histórico de mensagens.",
      image: realTimeChat,
      tags: ["Vue.js", "TypeScript", "Firebase"],
      link: "https://www.linkedin.com/posts/gabrielfel1x_chat-em-tempo-real-com-vuejs-em-meu-%C3%BAltimo-activity-7203754988794220549-uBsV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_vjZkBeYjKjlouVzeq0JXBHoyOjNmn2gc",
      repo: "https://github.com/gabrielfel1x/vue-realtime-chat",
      features: [
        "Chat em tempo real utilizando Firebase Realtime Database",
        "Autenticação de usuários",
        "Indicador de status online/offline",
        "Histórico de conversas",
        "Layout responsivo e amigável"
      ]
    },
    {
      id: 4,
      title: "Firebase Auth com Vue.js",
      description: "Sistema de autenticação web com Vue.js, TypeScript, Firebase e suporte a internacionalização (i18n).",
      longDescription: "Uma solução completa de autenticação utilizando Vue.js e Firebase, com suporte a múltiplos idiomas através do sistema de internacionalização (i18n). O projeto implementa login, registro, recuperação de senha e perfil de usuário.",
      image: firebaseAuth,
      tags: ["Vue.js", "TypeScript", "Firebase", "i18n"],
      link: "https://www.linkedin.com/posts/gabrielfel1x_atualiza%C3%A7%C3%B5es-no-meu-projeto-de-autentica%C3%A7%C3%A3o-activity-7196456288866701312-yCnO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_vjZkBeYjKjlouVzeq0JXBHoyOjNmn2gc",
      repo: "https://github.com/gabrielfel1x/vue-auth-i18n",
      features: [
        "Autenticação completa (email/senha, Google, Facebook)",
        "Recuperação de senha",
        "Verificação de email",
        "Suporte a múltiplos idiomas (PT-BR, EN, ES)",
        "Perfil de usuário editável"
      ]
    },
    {
      id: 5,
      title: "Recipes Explorer",
      description: "Aplicação web para explorar, filtrar e salvar receitas, com integração à TheMealDB API e suporte a temas.",
      longDescription: "O Recipes Explorer é uma aplicação web que permite aos usuários explorar, filtrar e salvar receitas de diferentes culinárias. Integrado com a TheMealDB API, o sistema oferece funcionalidades como pesquisa avançada, filtros por categoria e área, além de permitir que os usuários salvem suas receitas favoritas.",
      image: recipesExplorer,
      tags: ["React.js", "TypeScript", "React Router", "Axios"],
      link: "https://www.linkedin.com/posts/gabrielfel1x_recipes-explorer-aplica%C3%A7%C3%A3o-web-para-explora%C3%A7%C3%A3o-activity-7267509517733572612-ITIr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_vjZkBeYjKjlouVzeq0JXBHoyOjNmn2gc",
      repo: "https://github.com/gabrielfel1x/recipes-explorer",
      features: [
        "Integração com TheMealDB API",
        "Pesquisa e filtros avançados",
        "Sistema de favoritos",
        "Modo claro/escuro",
        "Detalhes completos de cada receita"
      ]
    }  
  ];

  const openProject = (project: Project) => {
    document.body.style.overflow = 'hidden';
    setSelectedProject(project);
  };

  const closeProject = () => {
    document.body.style.overflow = 'auto';
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            Projetos em Destaque
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Confira alguns dos meus trabalhos mais recentes e tecnologias utilizadas em cada projeto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex space-x-3 justify-end">
                      {project.repo && (
                        <a 
                          href={project.repo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
                          aria-label="GitHub Repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full ${
                        tag === "Ruby on Rails" ? 'text-gray-500 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => openProject(project)}
                  className="w-full py-2 mt-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                >
                  Ver detalhes
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 20 }}
              className="bg-white dark:bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
                
                {selectedProject.features && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Principais recursos</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="mr-2 text-blue-500">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-4 mt-6">
                  {selectedProject.repo && (
                    <a 
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github size={18} />
                      Código fonte
                    </a>
                  )}
                  
                  <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Ver demonstração
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;