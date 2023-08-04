import React from "react";
import Checkbox from "./Checkbox";
import Alert from "./Alert";
import getCalendars from "./calendars";
import "./App.scss";

class App extends React.Component {
  state = {
    calendars: this.getCalendars(),
  };

  componentDidUpdate() {
    setTimeout(() => {
      localStorage["ads-unopar"] = JSON.stringify(this.state.calendars);
    });
  }

  getCalendars() {
    let calendars = localStorage["ads-unopar"];

    if (calendars) {
      return JSON.parse(calendars);
    } else {
      calendars = getCalendars();
      calendars.forEach((c) => {
        if (!c.readOnly) {
          c.events.forEach((e) => {
            e.done = null;
          });
        }
      });
      return calendars;
    }
  }

  onCheckboxClick(i, j) {
    const calendars = [...this.state.calendars];
    const event = calendars[i].events[j];
    const nextState = {
      null: true,
      true: false,
      false: null,
    };
    event.done = nextState[event.done];
    this.setState({ calendars });
  }

  render() {
    const { calendars } = this.state;

    return (
      <>
        {calendars.map((calendar, i) => (
          <table key={calendar.name} className="calendar">
            <thead>
              <tr>
                <th
                  className="calendar__discipline"
                  colSpan={3}
                  style={{ background: calendar.color, border: `1px solid ${calendar.color}` }}
                >
                  {calendar.name}
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
              {calendar.events.map((event, j) => (
                <tr key={event.name}>
                  <td>
                    {calendar.readOnly ? (
                      event.name
                    ) : (
                      <Checkbox
                        done={event.done}
                        label={event.name}
                        onClick={() => this.onCheckboxClick(i, j)}
                      />
                    )}
                  </td>
                  <td className="calendar__date">{event.start || "-"}</td>
                  <td className="calendar__date">{event.end || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
        <Alert>
          Teleaulas e Conteúdos Web não possuem prazo pois podem ser acessados a qualquer momento
          durante o decorrer do semestre.
        </Alert>
        <Alert>As lives não estão inclusas pois as datas ainda não estão disponíveis.</Alert>
        <Alert>
          As gravações de lives não estão inclusas pois algumas das datas de início apresentadas não
          correspondem à data de sua disponibilização e são opcionais aos alunos que assistirem a
          live durante a sua transmissão.
        </Alert>
      </>
    );
  }
}

export default App;
