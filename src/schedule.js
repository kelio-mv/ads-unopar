const schedule = [
  {
    name: "Green It",
    activities: [
      { name: "Teleaula" },
      { name: "Conteúdo Web 1" },
      { name: "Conteúdo Web 2" },
      { name: "Conteúdo Web 3" },
      { name: "Conteúdo Web 4" },
      { name: "Avaliação 1", end: "02/09" },
      { name: "Avaliação 2", end: "09/09" },
      { name: "Prova Presencial - 1º chamada", start: "07/09", end: "14/09" },
    ],
    color: "#15803d",
  },
  {
    name: "Governança de Tecnologia",
    activities: [
      { name: "Conteúdo Web 1", start: "26/08" },
      { name: "Conteúdo Web 2", start: "26/08" },
      { name: "Conteúdo Web 3", start: "26/08" },
      { name: "Conteúdo Web 4", start: "26/08" },
      { name: "Teleaula 1", start: "07/09" },
      { name: "Teleaula 2", start: "14/09" },
      { name: "Teleaula 3", start: "21/09" },
      { name: "Teleaula 4", start: "28/09" },
      { name: "Avaliação 1", start: "26/08", end: "30/09" },
      { name: "Avaliação 2", start: "26/08", end: "07/10" },
      { name: "Prova Presencial - 1º chamada", start: "28/09", end: "05/10" },
    ],
    color: "#047857",
  },
  {
    name: "Computação em Nuvem",
    activities: [
      { name: "Teleaula" },
      { name: "Conteúdo Web 1", start: "23/09" },
      { name: "Conteúdo Web 2", start: "23/09" },
      { name: "Conteúdo Web 3", start: "23/09" },
      { name: "Conteúdo Web 4", start: "23/09" },
      { name: "Avaliação 1", start: "23/09", end: "28/10" },
      { name: "Avaliação 2", start: "23/09", end: "04/11" },
      { name: "Prova Presencial - 1º chamada", start: "02/11", end: "09/11" },
      { name: "Portfólio", end: "02/11" },
    ],
    color: "#0f766e",
  },
  {
    name: "Program. e Desenv. de Banco de Dados",
    activities: [
      { name: "Teleaula" },
      { name: "Conteúdo Web 1" },
      { name: "Conteúdo Web 2" },
      { name: "Conteúdo Web 3" },
      { name: "Conteúdo Web 4" },
      { name: "Avaliação 1", end: "18/11" },
      { name: "Avaliação 2", end: "25/11" },
      { name: "Prova Presencial - 1º chamada", start: "09/11", end: "23/11" },
      { name: "Portfólio", end: "02/11" },
    ],
    color: "#0e7490",
  },
  {
    name: "Programação Web",
    activities: [
      { name: "Conteúdo Web 1", start: "14/10" },
      { name: "Conteúdo Web 2", start: "14/10" },
      { name: "Conteúdo Web 3", start: "14/10" },
      { name: "Conteúdo Web 4", start: "14/10" },
      { name: "Teleaula 1", start: "02/11" },
      { name: "Teleaula 2", start: "09/11" },
      { name: "Teleaula 3", start: "16/11" },
      { name: "Teleaula 4", start: "23/11" },
      { name: "Avaliação 1", start: "14/10", end: "25/11" },
      { name: "Avaliação 2", start: "14/10", end: "02/12" },
      { name: "Prova Presencial - 1º chamada", start: "23/11", end: "30/11" },
      { name: "Portfólio", end: "16/11" },
    ],
    color: "#0369a1",
  },
  {
    name: "Todas as disciplinas",
    activities: [
      { name: "Avaliação Substituta 1", start: "03/12", end: "07/12" },
      { name: "Avaliação Substituta 2", start: "03/12", end: "07/12" },
      { name: "Prova Presencial - 2º chamada", start: "02/12", end: "07/12" },
      { name: "Prova Presencial - recuperação", start: "09/12", end: "14/12" },
    ],
    color: "#374151",
    readOnly: true,
  },
];

export default schedule;
