function getCommonActivities() {
  return [
    { name: "Conteúdo Web 1" },
    { name: "Conteúdo Web 2" },
    { name: "Conteúdo Web 3" },
    { name: "Conteúdo Web 4" },
  ];
}

const schedule = [
  {
    name: "Análise Orientada a Objetos",
    activities: [
      ...getCommonActivities(),
      { name: "Teleaula 1", start: "10/02" },
      { name: "Teleaula 2", start: "17/02" },
      { name: "Teleaula 3", start: "24/02" },
      { name: "Teleaula 4", start: "02/03" },
      { name: "Live / Gravação da Live", start: "26/02" },
      { name: "Avaliação 1", end: "04/03" },
      { name: "Avaliação 2", end: "11/03" },
      { name: "Prova Presencial - 1º chamada", start: "04/03", end: "09/03" },
      { name: "Portfólio", end: "04/05" },
    ],
    color: "#15803d",
  },
  {
    name: "Linguagem Orientada a Objetos",
    activities: [
      ...getCommonActivities(),
      { name: "Teleaula 1", start: "09/03" },
      { name: "Teleaula 2", start: "16/03" },
      { name: "Teleaula 3", start: "23/03" },
      { name: "Teleaula 4", start: "30/03" },
      { name: "Live / Gravação da Live", start: "28/03" },
      { name: "Avaliação 1", start: "26/02", end: "01/04" },
      { name: "Avaliação 2", start: "26/02", end: "08/04" },
      { name: "Prova Presencial - 1º chamada", start: "01/04", end: "06/04" },
      { name: "Portfólio", end: "04/05" },
    ],
    color: "#047857",
  },
  {
    name: "Modelagem de Dados",
    activities: [
      ...getCommonActivities(),
      { name: "Teleaula 1", start: "06/04" },
      { name: "Teleaula 2", start: "13/04" },
      { name: "Teleaula 3", start: "20/04" },
      { name: "Teleaula 4", start: "27/04" },
      { name: "Live / Gravação da Live", start: "29/04" },
      { name: "Avaliação 1", start: "18/03", end: "29/04" },
      { name: "Avaliação 2", start: "18/03", end: "06/05" },
      { name: "Prova Presencial - 1º chamada", start: "06/05", end: "11/05" },
      { name: "Portfólio", end: "04/05" },
    ],
    color: "#0f766e",
  },
  {
    name: "Qualidade e Automação de Testes",
    activities: [
      ...getCommonActivities(),
      { name: "Live / Gravação da Live", start: "09/05" },
      { name: "Avaliação 1", end: "20/05" },
      { name: "Avaliação 2", end: "27/05" },
      { name: "Prova Presencial - 1º chamada", start: "13/05", end: "25/05" },
    ],
    color: "#0e7490",
  },
  {
    name: "Sistemas Operacionais",
    activities: [
      ...getCommonActivities(),
      { name: "Teleaula 1", start: "04/05" },
      { name: "Teleaula 2", start: "11/05" },
      { name: "Teleaula 3", start: "18/05" },
      { name: "Teleaula 4", start: "25/05" },
      { name: "Live / Gravação da Live", start: "23/05" },
      { name: "Avaliação 1", start: "08/04", end: "27/05" },
      { name: "Avaliação 2", start: "08/04", end: "03/06" },
      { name: "Prova Presencial - 1º chamada", start: "27/05", end: "01/06" },
      { name: "Portfólio", end: "18/05" },
    ],
    color: "#0369a1",
  },
  {
    name: "Projeto de Extensão I",
    activities: [
      { name: "Teleaula 1" },
      { name: "Teleaula 2" },
      { name: "Teleaula 3" },
      { name: `Portfólio${Array(41).join(" ")}`, end: "04/05" },
    ],
    color: "#1d4ed8",
  },
  {
    name: "Todas as disciplinas",
    activities: [
      { name: "Avaliação Substituta 1", start: "04/06", end: "08/06" },
      { name: "Avaliação Substituta 2", start: "04/06", end: "08/06" },
      { name: "Prova Presencial - 2º chamada", start: "03/06", end: "08/06" },
      { name: "Prova Presencial - recuperação", start: "10/06", end: "15/06" },
    ],
    color: "#374151",
    readOnly: true,
  },
];

export default schedule;
