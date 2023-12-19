function getCommonActivities() {
  return [
    { name: "Teleaula 1" },
    { name: "Teleaula 2" },
    { name: "Teleaula 3" },
    { name: "Teleaula 4" },
    { name: "Conteúdo Web 1" },
    { name: "Conteúdo Web 2" },
    { name: "Conteúdo Web 3" },
    { name: "Conteúdo Web 4" },
    { name: "Livro Didático" },
  ];
}

const schedule = [
  {
    name: "Linguagem de Programação",
    activities: [
      ...getCommonActivities(),
      { name: "Live / Gravação da Live", start: "21/08" },
      { name: "Avaliação 1", end: "28/08" },
      { name: "Avaliação 2", end: "04/09" },
      { name: "Prova Presencial - 1º chamada", start: "28/08", end: "02/09" },
      { name: "Portfólio", end: "28/10" },
    ],
    color: "#15803d",
  },
  {
    name: "Engenharia de Software",
    activities: [
      ...getCommonActivities(),
      { name: "Live / Gravação da Live", start: "18/09" },
      { name: "Avaliação 1", start: "21/08", end: "25/09" },
      { name: "Avaliação 2", start: "21/08", end: "02/10" },
      { name: "Prova Presencial - 1º chamada", start: "25/09", end: "30/09" },
    ],
    color: "#047857",
  },
  {
    name: "Lógica e Matemática Computacional",
    activities: [
      ...getCommonActivities(),
      { name: "Live / Gravação da Live", start: "19/10" },
      { name: "Avaliação 1", start: "11/09", end: "23/10" },
      { name: "Avaliação 2", start: "11/09", end: "30/10" },
      { name: "Prova Presencial - 1º chamada", start: "23/10", end: "28/10" },
      { name: "Portfólio", end: "28/10" },
    ],
    color: "#0f766e",
  },
  {
    name: "Algoritmos e Programação Estruturada",
    activities: [
      ...getCommonActivities(),
      { name: "Live / Gravação da Live", start: "24/10" },
      { name: "Avaliação 1", end: "13/11" },
      { name: "Avaliação 2", end: "20/11" },
      { name: "Prova Presencial - 1º chamada", start: "30/10", end: "11/11" },
      { name: "Portfólio", end: "28/10" },
    ],
    color: "#0e7490",
  },
  {
    name: "Análise e Modelagem de Sistemas",
    activities: [
      ...getCommonActivities(),
      { name: "Live / Gravação da Live", start: "17/11" },
      { name: "Avaliação 1", start: "02/10", end: "20/11" },
      { name: "Avaliação 2", start: "02/10", end: "27/11" },
      { name: "Prova Presencial - 1º chamada", start: "20/11", end: "25/11" },
      { name: "Portfólio", end: "11/11" },
    ],
    color: "#0369a1",
  },
  {
    name: "Todas as disciplinas",
    activities: [
      { name: "Prova Presencial - 2º chamada", start: "27/11", end: "02/12" },
      { name: "Avaliação Substituta 1", start: "28/11", end: "02/12" },
      { name: "Avaliação Substituta 2", start: "28/11", end: "02/12" },
      { name: "Prova Presencial - recuperação", start: "04/12", end: "09/12" },
    ],
    color: "#334155",
    readOnly: true,
  },
];

export default schedule;
