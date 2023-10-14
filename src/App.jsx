import React from "react";
import Icon from "./Icon";
import Checkbox from "./Checkbox";
import Alert from "./Alert";
import getCalendars from "./calendars";
import "./App.scss";

class App extends React.Component {
  state = {
    calendars: this.getCalendars(),
  };

  componentDidMount() {
    // Preload icons
    const icons = ["done", "undone"];
    icons.forEach((icon) => <Icon name={icon} />);
  }

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
      </>
    );
  }
}

export default App;
