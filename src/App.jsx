import Arrow from "./Arrow";
import "./App.scss";

function App() {
  const commonEvents = [
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
  const disciplines = [
    {
      name: "Linguagem de Programação",
      events: [
        ...commonEvents,
        { name: "Avaliação 1", end: "28/08" },
        { name: "Prova Presencial - 1º chamada", start: "28/08", end: "02/09" },
        { name: "Avaliação 2", end: "04/09" },
        { name: "Portfólio", end: "28/10" },
      ],
      color: "#15803d",
    },
    {
      name: "Engenharia de Software",
      events: [
        ...commonEvents,
        { name: "Avaliação 1", start: "21/08", end: "25/09" },
        { name: "Prova Presencial - 1º chamada", start: "25/09", end: "30/09" },
        { name: "Avaliação 2", start: "21/08", end: "02/10" },
      ],
      color: "#047857",
    },
    {
      name: "Lógica e Matemática Computacional",
      events: [
        ...commonEvents,
        { name: "Avaliação 1", start: "11/09", end: "23/10" },
        { name: "Portfólio", end: "28/10" },
        { name: "Prova Presencial - 1º chamada", start: "23/10", end: "28/10" },
        { name: "Avaliação 2", start: "11/09", end: "30/10" },
      ],
      color: "#0f766e",
    },
    {
      name: "Algoritmos e Programação Estruturada",
      events: [
        ...commonEvents,
        { name: "Portfólio", end: "28/10" },
        { name: "Prova Presencial - 1º chamada", start: "30/10", end: "11/11" },
        { name: "Avaliação 1", end: "13/11" },
        { name: "Avaliação 2", end: "20/11" },
      ],
      color: "#0e7490",
    },
    {
      name: "Análise e Modelagem de Sistemas",
      events: [
        ...commonEvents,
        { name: "Portfólio", end: "11/11" },
        { name: "Avaliação 1", start: "02/10", end: "20/11" },
        { name: "Prova Presencial - 1º chamada", start: "20/11", end: "25/11" },
        { name: "Avaliação 2", start: "02/10", end: "27/11" },
      ],
      color: "#0369a1",
    },
    {
      name: "Todas as disciplinas",
      events: [
        { name: "Prova Presencial - 2º chamada", start: "27/11", end: "02/12" },
        { name: "Avaliação Substituta 1", start: "28/11", end: "02/12" },
        { name: "Avaliação Substituta 2", start: "28/11", end: "02/12" },
        { name: "Prova Presencial - recuperação", start: "04/12", end: "09/12" },
      ],
      color: "var(--clr-700)",
    },
  ];

  return disciplines.map((discipline) => (
    <table key={discipline.name} className="calendar">
      <thead>
        <tr>
          <th
            className="calendar__discipline"
            colSpan={3}
            style={{ background: discipline.color, border: `1px solid ${discipline.color}` }}
          >
            {discipline.name}
          </th>
        </tr>
        <tr className="calendar__headers">
          <th>Evento</th>
          <th style={{ cursor: "pointer" }}>
            <span>Início </span>
          </th>
          <th style={{ cursor: "pointer" }}>
            <span>Fim </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {discipline.events.map((event) => (
          <tr key={event.name}>
            <td>{event.name}</td>
            <td className="calendar__date">{event.start || "-"}</td>
            <td className="calendar__date">{event.end || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ));
}

export default App;

// Não incluir Gravação de Live, pois a data de início não corresponde à data em que ela
// estará disponível, além disso, é opcional para quem já assistiu a Live ao vivo.
// Não incluir Leitura, pois a mesma contém apenas o Plano de Ensino e o Livro Didático,
// não sendo considerado um evento.
// As avaliações substitutas permitem aos alunos substituírem as notas de suas avaliações
// virtuais, não sendo obrigatório para quem já teve um bom desempenho.
// adicionar info sobre 2º chamada e recuperação

// { name: "Gravação da Live", start: "31/07", end: "09/12" },
