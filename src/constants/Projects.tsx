import {
  imgProject1,
  imgProject2,
  imgProject3,
  imgProject4,
  imgProject5,
  vidProject1,
  vidProject2,
  vidProject3,
  vidProject4,
  vidProject5,
  LeoMi,
  Sabordobem,
  Friendly,
  vaptPitch,
  friendlyPitch,
  energPitch,
  bluePitch,
  saborPitch,
} from "../utils/utils";

export const projects = [
  {
    id: "Vapt-Vupt",
    title: "Vapt-Vupt",
    subtitle: "(Challenge - FIAP)",
    description:
      "Uma plataforma inovadora que utiliza inteligência artificial para te auxiliar na jornada de manutenção do seu carro.",
    image: imgProject1,
    video: vidProject1,
    link: "https://vapt-vupt.vercel.app/",
    year: "(2024) Fev - Nov",
    youtube: "https://www.youtube.com/@Vapt-Vupt_Challenge",
    credits: [
      { name: "Leonardo Botelho", work: "Dev Back-End" },
      { name: "Mirian Bronzati", work: "Dev IA" },
    ],
    services: [
      "Web Development",
      "Web Design",
      "Branding",
      "Motion Design",
      "Video Editing",
    ],
    /* media */
    team: LeoMi,
    pitch: vaptPitch,
  },
  {
    id: "Friendly",
    title: "Friendly",
    subtitle: "(Iniciação Científica - FIAP)",
    description:
      "Uma plataforma de IA que te ajuda a cuidar da sua saúde mental e emocional através de um Chatbot e Reconhecimento facial.",
    image: imgProject2,
    video: vidProject2,
    link: "https://reco-facial-friendly.vercel.app/",
    year: "(2024) Fev - Out",
    youtube: "https://www.youtube.com/@friendly2024",
    credits: [
      { name: "Henrique Franco", work: "Auxiliar de projeto" },
      { name: "Humberto Vitalino", work: "Dev IA" },
      { name: "Kaian Gustavo", work: "Documentação" },
      { name: "Leonardo Botelho", work: "Dev Back-End" },
      { name: "Nicollas Guedes", work: "Líder do Projeto" },
    ],
    services: [
      "Web Development",
      "Web Design",
      "Branding",
      "Motion Design",
      "Video Editing",
    ],
    /* media */
    team: Friendly,
    pitch: friendlyPitch,
  },
  {
    id: "Energia",
    title: "Energia",
    subtitle: "(Global Solution 2 - FIAP)",
    description:
      "Uma plataforma que simplifica o acompanhamento do consumo de energia, com análises detalhadas e recomendações personalizadas para reduzir desperdícios.",
    image: imgProject3,
    video: vidProject3,
    link: "https://gs-sigma.vercel.app/",
    year: "(2024) Nov",
    youtube: "https://www.youtube.com/@Energia-o7u",
    credits: [
      { name: "Leonardo Botelho", work: "Dev Back-End" },
      { name: "Mirian Bronzati", work: "Dev IA" },
    ],
    services: [
      "Web Development",
      "Web Design",
      "Branding",
      "Motion Design",
      "Video Editing",
    ],
    /* media */
    team: LeoMi,
    pitch: energPitch,
  },
  {
    id: "BlueGuardians",
    title: "Blue Guardians",
    subtitle: "(Global Solution 1 - FIAP)",
    description:
      "Um quiz interativo sobre vida marinha e ecossistemas oceânicos, com o chatbot Professor Polvo para enriquecer sua experiência.",
    image: imgProject4,
    video: vidProject4,
    link: "https://global-solution-olive.vercel.app/",
    year: "(2024) Jun",
    youtube: "https://www.youtube.com/@BlueGuardiansGS",
    credits: [
      { name: "Leonardo Botelho", work: "Dev Back-End" },
      { name: "Mirian Bronzati", work: "Dev IA" },
    ],
    services: [
      "Web Development",
      "Web Design",
      "Branding",
      "Motion Design",
      "Video Editing",
    ],
    /* media */
    team: LeoMi,
    pitch: bluePitch,
  },
  {
    id: "Sabordobem",
    title: "Sabor do bem",
    subtitle: "(TCC - ETEC)",
    description:
      "Um App que conecta supermercados a ONGs e asilos para reduzir o desperdício de alimentos e distribuí-los a quem precisa.",
    image: imgProject5,
    video: vidProject5,
    link: "https://sabordobem.vercel.app/",
    year: "(2023) Fev - Nov",
    youtube: "https://www.youtube.com/@SabordoBemTCC",
    credits: [
      { name: "Leonardo Andorni", work: "Dev Mobile" },
      { name: "Lorenzo Augusto", work: "Auxiliar de projeto" },
      { name: "Lucas Roque", work: "Dev Mobile" },
      { name: "Mariana Nikaido", work: "Documentação" },
    ],
    services: [
      "Web Development",
      "Web Design",
      "Branding",
      "Motion Design",
      "Video Editing",
    ],
    /* media */
    team: Sabordobem,
    pitch: saborPitch,
  },
];
