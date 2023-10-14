import React from "react";
import Checkbox from "./Checkbox";
import Alert from "./Alert";
import storage from "./storage";
import "./App.scss";

class App extends React.Component {
  state = {
    calendars: storage.calendars,
  };

  componentDidMount() {
    // Preload icons
    const icons = ["done", "undone"];
    icons.forEach((icon) => {
      const img = new Image();
      img.src = icon + ".svg";
    });
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
    this.setState({ calendars }, () => storage.saveCalendars(this.state.calendars));
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
                <th>Atividade</th>
                <th>Início</th>
                <th>Fim</th>
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
          A ausência das datas de início e fim de uma atividade indicam que ela pode ser realizada
          desde o início do semestre (31/07) e até o final do semestre (09/12) respectivamente.
        </Alert>
        <Alert>
          Algumas atividades não estão cronologicamente ordenadas. Fique atento(a) aos prazos!
        </Alert>
      </>
    );
  }
}

export default App;
