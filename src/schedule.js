const cw = () => Array.from({ length: 4 }, (_, i) => ({ name: `Conteúdo Web ${i + 1}` }));
const ta = () => Array.from({ length: 4 }, (_, i) => ({ name: `Teleaula ${i + 1}` }));

const schedule = [
  {
    name: "Desenvolvimento Responsivo",
    activities: [
      ...cw(),
      { name: "Avaliação 1", end: "03/03" },
      { name: "Avaliação 2", end: "10/03" },
      { name: "Prova Presencial - 1º chamada", start: "08/03", end: "15/03" },
      { name: "Live Revisão", start: "24/02", end: "24/02" },
    ],
    color: "#15803d",
  },
  {
    name: "Sistemas Distribuídos",
    activities: [
      ...cw(),
      ...ta(),
      { name: "Avaliação 1", start: "24/02", end: "31/03" },
      { name: "Avaliação 2", start: "24/02", end: "07/04" },
      { name: "Prova Presencial - 1º chamada", start: "29/03", end: "05/04" },
      { name: "Portfólio", end: "03/05" },
    ],
    color: "#047857",
  },
  {
    name: "Desenvolvimento em Javascript",
    activities: [
      ...cw(),
      { name: "Avaliação 1", start: "24/03", end: "28/04" },
      { name: "Avaliação 2", start: "24/03", end: "05/05" },
      { name: "Prova Presencial - 1º chamada", start: "03/05", end: "10/05" },
      { name: "Portfólio", end: "03/05" },
    ],
    color: "#0f766e",
  },
  {
    name: "Frameworks Para Desenv. de Software",
    activities: [
      ...cw(),
      { name: "Avaliação 1", end: "19/05" },
      { name: "Avaliação 2", end: "26/05" },
      { name: "Prova Presencial - 1º chamada", start: "10/05", end: "24/05" },
    ],
    color: "#0e7490",
  },
  {
    name: "Desenvolvimento Mobile",
    activities: [
      ...cw(),
      ...ta(),
      { name: "Avaliação 1", start: "14/04", end: "26/05" },
      { name: "Avaliação 2", start: "14/04", end: "02/06" },
      { name: "Prova Presencial - 1º chamada", start: "24/05", end: "31/05" },
      { name: "Portfólio", end: "17/05" },
    ],
    color: "#0369a1",
  },
  {
    name: "Projeto de Extensão II",
    activities: [...ta().slice(0, -1), { name: "Portfólio - Projeto de Extensão", end: "03/05" }],
    color: "#1d4ed8",
  },
  {
    name: "Todas as disciplinas",
    activities: [
      { name: "Avaliação Substituta 1", start: "03/06", end: "07/06" },
      { name: "Avaliação Substituta 2", start: "03/06", end: "07/06" },
      { name: "Prova Presencial - 2º Chamada", start: "09/06", end: "14/06" },
      { name: "Prova Presencial - Recuperação", start: "16/06", end: "21/06" },
    ],
    color: "#374151",
    readOnly: true,
  },
];

export default schedule;
