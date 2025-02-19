import { GitHubIcon, GmailIcon, LinkedinIcon, OutlookIcon, WhatsappIcon } from "../../components/icons/mediaIcons";
import ContactPage from "../../pages/ContactPage";
import HomePage from "../../pages/HomePage";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const routePathsAndElements: any = [
  {path: '/', element: <HomePage />},
  {path: '/contacts', element: <ContactPage />},
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