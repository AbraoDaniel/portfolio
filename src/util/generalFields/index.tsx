import { GitHubIcon, GmailIcon, LinkedinIcon, OutlookIcon, WhatsappIcon } from "../../components/icons/mediaIcons";
import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";
import DantiGoalsPage from "../../pages/DantiGoalsPage";
import DantiRestaurantMenuPage from "../../pages/DantiRestaurantMenuPage";
import DantiShopPage from "../../pages/DantiShopPage";
import DantiWalletPage from "../../pages/DantiWalletPage";
import HomePage from "../../pages/HomePage";
import ProjectsPage from "../../pages/ProjectsPage";
import WorkPage from "../../pages/WorkPage";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const routePathsAndElements: any = [
  {path: '/', element: <HomePage />},
  {path: '/contacts', element: <ContactPage />},
  {path: '/projects', element: <ProjectsPage />},
  {path: '/about', element: <AboutPage />},
  {path: '/work', element: <WorkPage />},
  {path: '/projects/danti-shop', element: <DantiShopPage />},
  {path: '/projects/danti-goals', element: <DantiGoalsPage />},
  {path: '/projects/danti-wallet', element: <DantiWalletPage />},
  {path: '/projects/danti-restaurant-menu', element: <DantiRestaurantMenuPage />},
]


export const specialitiesContent = [
  {title: 'DESENVOLVIMENTO FRONTEND', text: 'Criação de interfaces intuitivas e visualmente envolventes que proporcionam uma experiência fluida e interativa. Cada detalhe é pensado para garantir performance, acessibilidade e responsividade, alinhando tecnologia com um design sofisticado.', link: 'frontend'},
  {title: 'DESENVOLVIMENTO BACKEND', text: 'Soluções robustas e escaláveis para garantir o funcionamento eficiente de sistemas e aplicações. Desenvolvemos arquiteturas sólidas, seguras e de alta performance para suportar demandas complexas com máxima confiabilidade.', link: 'backend'},
  {title: 'GARANTIA DE QUALIDADE', text: 'Teste e otimização de cada aspecto do produto para assegurar confiabilidade, segurança e usabilidade impecáveis.', link: 'test'}
]

export const projects = [
  {title: 'DANTI SHOP', stack: 'FRONTEND', image: './Projects/danti-shop_.png', link: '/danti-shop'},
  {title: 'DANTI GOALS', stack: 'FRONTEND + BACKEND', image: './Projects/danti-goals.png', link: '/danti-goals'},
  {title: 'DANTI WALLET', stack: 'FRONTEND + BACKEND', image: './Projects/danti-wallet.png', link: '/danti-wallet'},
  {title: 'DANTI RESTAURANT MENU', stack: 'FRONTEND', image: './Projects/danti-menu.png', link: '/danti-restaurant-menu'},
]

export const mediaContacts = [
  {label: 'LINKEDIN', icon: <LinkedinIcon />, link: 'https://www.linkedin.com/in/daniel-alexsandro-abr%C3%A3o-2002/'},
  {label: 'GITHUB', icon: <GitHubIcon />, link: 'https://github.com/AbraoDaniel'},
  {label: 'OUTLOOK', icon: <OutlookIcon />, link: 'mailto:abraodaniel@hotmail.com'},
  {label: 'GMAIL', icon: <GmailIcon />, link: 'mailto:danabrao@gmail.com'},
  {label: 'WHATSAPP', icon: <WhatsappIcon />, link: 'https://wa.me/5547984894797'},
  
]

export const pageItems = [
  {key: 'projects', label: 'PROJETOS'},
  {key: 'work', label: 'SERVIÇOS'},
  {key: 'about', label: 'SOBRE'},
  {key: 'github', label: 'GITHUB'},
  {key: 'contacts', label: 'CONTATOS'},
]

export const usefullLinks = [
  {key: 'https://drive.google.com/drive/u/3/folders/1eplWIyJCZ26FlN7W7MrH-R3r2yJo-q87', label: 'CERTIFICADOS'},
  {key: 'https://abraodaniel.github.io/e-commerce/', label: 'DANTI SHOP DEMO'},
]

export const pagesInfo = [
  {key: 'danti-shop', projectName: 'Danti Shop', description: 'Uma experiência de compra fluida, moderna e intuitiva, feita para você.',
    firstInfo: [
      {title: 'STACK', text: 'FRONTEND'},
      {title: 'PERFORMANCE', text: 'OTIMIZADA'},
      {title: 'DESIGN', text: 'RESPONSIVO'},
      {title: 'GESTÃO', text: 'EFICIENTE'}
    ],
    cardsInfo: [
      {title: 'Foco na Experiência do Cliente', description: 'O projeto foi desenvolvido priorizando uma interface moderna e intuitiva, garantindo uma experiência de compra fluida e eficiente. Com design responsivo e carregamento otimizado, os usuários podem navegar e realizar compras facilmente em qualquer dispositivo.'},
      {title: 'Desempenho e Eficiência', description: 'Utilizando tecnologias modernas como ReactJS e TypeScript, o e-commerce foi projetado para ser altamente performático. O uso de estratégias como lazy loading e otimização de assets garante carregamento rápido e melhora a experiência do usuário.'},
      {title: 'Linguagens', description: 'O projeto foi desenvolvido utilizando Typescript, ReactJS, HTML e CSS, fazendo uso também de localStorage para armazenamento temporário de informações.'}
    ]
  },
  {key: 'danti-goals', projectName: 'Danti Goals', description: 'A ferramenta ideal para organizar, acompanhar e conquistar seus objetivos de forma eficiente e intuitiva.',
    firstInfo: [
      {title: 'STACK', text: 'FRONTEND + BACKEND'},
      {title: 'PERFORMANCE', text: 'OTIMIZADA'},
      {title: 'DESIGN', text: 'INTUITIVO'},
      {title: 'GESTÃO', text: 'EFICIENTE'}
    ],
    cardsInfo: [
      {title: 'Organização Simplificada', description: 'Gerencie suas metas de forma clara, categorizando tarefas e acompanhando seu progresso sem complicações.'},
      {title: 'Acompanhamento Eficiente', description: 'Visualize seus objetivos, priorize atividades e otimize sua produtividade com um sistema de gerenciamento intuitivo.'},
      {title: 'Linguagens', description: 'O projeto foi desenvolvido utilizando Typescript tanto no frontend quanto no backend, ReactJS, HTML e CSS.'}
    ]
  },
  {key: 'danti-wallet', projectName: 'Danti Wallet', description: 'Controle financeiro simplificado! Uma plataforma eficiente para gerenciar despesas, visualizar transações e manter o equilíbrio das suas finanças.',
    firstInfo: [
      {title: 'STACK', text: 'FRONTEND + BACKEND'},
      {title: 'PERFORMANCE', text: 'ESCALÁVEL'},
      {title: 'DESIGN', text: 'INTUITIVO'},
      {title: 'GESTÃO', text: 'EFICIENTE'}
    ],
    cardsInfo: [
      {title: 'Controle de Gastos', description: 'Organize suas despesas e receitas em um só lugar, categorizando transações e monitorando seu orçamento com facilidade.'},
      {title: 'Processos Inteligentes', description: 'Automação na organização das finanças, garantindo maior segurança e precisão na gestão dos dados.'},
      {title: 'Linguagens', description: 'Desenvolvido com Ruby on Rails e PostgreSQL, proporcionando uma aplicação robusta, escalável e confiável.'}
    ]
  },
  {key: 'danti-restaurant-menu', projectName: 'Danti Restaurant Menu', description: 'Uma solução moderna e eficiente para digitalizar o cardápio de restaurantes, proporcionando praticidade e uma experiência intuitiva para os clientes.',
    firstInfo: [
      {title: 'STACK', text: 'FRONTEND'},
      {title: 'PERFORMANCE', text: 'ESCALÁVEL'},
      {title: 'DESIGN', text: 'INTUITIVO'},
      {title: 'GESTÃO', text: 'EFICIENTE'}
    ],
    cardsInfo: [
      {title: 'Facilidade e Praticidade', description: 'Com uma interface intuitiva e moderna, o projeto visa digitalizar menus de restaurantes, permitindo que clientes acessem informações sobre pratos, preços e promoções diretamente de seus dispositivos.'},
      {title: 'Processos Inteligentes', description: 'Desenvolvido utilizando Nextjs, com princípios de SSR, garantindo um carregamento rápido e uma experiência fluida para os usuários, com foco na usabilidade e acessibilidade.'},
      {title: 'Linguagens', description: 'O projeto foi desenvolvido utilizando ReactJS, TypeScript, Nextjs e com integração com Firebase e Supabase, garantindo uma aplicação escalável e robusta.'}
    ]
  }
]

export const worksInfo = [
  {key: 'first', infos: [{title: 'CONCEITO', description: "Iniciamos compreendo suas ideias, seus objetivos e o público-alvo para criar um direcionamento estratégico sólido. Nesta etapa, alinhamos expectativas e estruturamos um plano para transformar sua visão em um produto digital bem definido."},
    {title: 'WIREFRAME', description: "Criamos um esqueleto visual da interface para organizar elementos, navegação e funcionalidades. O wireframe serve como um mapa estruturado do site ou aplicativo, garantindo uma experiência do usuário intuitiva e eficiente desde o início."},
    {title: 'PROTOTIPAÇÃO', description: "Desenvolvo um protótipo interativo que simula a experiência real do usuário. Isso permite testar fluxos, validar funcionalidades e refinar o design antes do desenvolvimento final, garantindo um produto funcional e bem otimizado."}
  ]}
]