import { GitHubIcon, GmailIcon, LinkedinIcon, OutlookIcon, WhatsappIcon } from "../../components/icons/mediaIcons";
import ContactPage from "../../pages/ContactPage";
import DantiGoalsPage from "../../pages/DantiGoalsPage";
import DantiShopPage from "../../pages/DantiShopPage";
import HomePage from "../../pages/HomePage";
import ProjectsPage from "../../pages/ProjectsPage";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const routePathsAndElements: any = [
  {path: '/', element: <HomePage />},
  {path: '/contacts', element: <ContactPage />},
  {path: '/projects', element: <ProjectsPage />},
  {path: '/projects/danti-shop', element: <DantiShopPage />},
  {path: '/projects/danti-goals', element: <DantiGoalsPage />}
]


export const specialitiesContent = [
  {title: 'DESENVOLVIMENTO FRONTEND', text: 'Criação de interfaces intuitivas e visualmente envolventes que proporcionam uma experiência fluida e interativa. Cada detalhe é pensado para garantir performance, acessibilidade e responsividade, alinhando tecnologia com um design sofisticado.', link: 'frontend'},
  {title: 'DESENVOLVIMENTO BACKEND', text: 'Soluções robustas e escaláveis para garantir o funcionamento eficiente de sistemas e aplicações. Desenvolvemos arquiteturas sólidas, seguras e de alta performance para suportar demandas complexas com máxima confiabilidade.', link: 'backend'},
  {title: 'GARANTIA DE QUALIDADE', text: 'Teste e otimização de cada aspecto do produto para assegurar confiabilidade, segurança e usabilidade impecáveis.', link: 'test'}
]

export const projects = [
  {title: 'DANTI SHOP', stack: 'FRONTEND', image: 'public/Projects/danti-shop_.png', link: '/danti-shop'},
  {title: 'DANTI GOALS', stack: 'FRONTEND + BACKEND', image: 'public/Projects/danti-goals.png', link: '/danti-goals'},
  {title: 'EM BREVE', stack: 'FRONTEND', image: 'public/Projects/black-bg.png', link: '/soon'},
  {title: 'DANTI WALLET', stack: 'BACKEND', image: 'public/Projects/danti-wallet.png', link: '/danti-wallet'},
]

export const mediaContacts = [
  {label: 'LINKEDIN', icon: <LinkedinIcon />, link: 'https://www.linkedin.com/in/daniel-alexsandro-abr%C3%A3o-2002/'},
  {label: 'GITHUB', icon: <GitHubIcon />, link: 'https://github.com/AbraoDaniel'},
  {label: 'OUTLOOK', icon: <OutlookIcon />, link: 'mailto:abraodaniel@hotmail.com'},
  {label: 'GMAIL', icon: <GmailIcon />, link: 'mailto:danabrao@gmail.com'},
  {label: 'WHATSAPP', icon: <WhatsappIcon />, link: 'https://wa.me/5547984894797'},
]

export const pageItems = [
  {key: 'work', label: 'SERVIÇOS'},
  {key: 'projects', label: 'PROJETOS'},
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
      {title: 'STACK', text: 'FRONTEND + BACKEND'},
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
      {title: 'STACK', text: 'FRONTEND'},
      {title: 'PERFORMANCE', text: 'OTIMIZADA'},
      {title: 'DESIGN', text: 'INTUITIVO'},
      {title: 'GESTÃO', text: 'EFICIENTE'}
    ],
    cardsInfo: [
      {title: 'Organização Simplificada', description: 'Gerencie suas metas de forma clara, categorizando tarefas e acompanhando seu progresso sem complicações.'},
      {title: 'Acompanhamento Eficiente', description: 'Visualize seus objetivos, priorize atividades e otimize sua produtividade com um sistema de gerenciamento intuitivo.'},
      {title: 'Linguagens', description: 'O projeto foi desenvolvido utilizando Typescript tanto no frontend quanto no backend, ReactJS, HTML e CSS.'}
    ]
  }
]