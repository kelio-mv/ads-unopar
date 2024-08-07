import useStorage from "./useStorage";
import Checkbox from "./Checkbox";
import Alert from "./Alert";
import initialSchedule from "./schedule";
import "./App.scss";

function App() {
  const [schedule, setSchedule] = useStorage("ads-unopar", getInitialSchedule());

  function getInitialSchedule() {
    initialSchedule.forEach((discipline) => {
      if (!discipline.readOnly) {
        discipline.activities.forEach((activity) => {
          activity.done = null;
        });
      }
    });
    return initialSchedule;
  }

  function handleCheckboxClick(discIndex, actIndex) {
    const activity = schedule[discIndex].activities[actIndex];
    const nextState = { null: true, true: false, false: null };
    activity.done = nextState[activity.done];
    setSchedule([...schedule]);
  }

  return (
    <>
      {schedule.map((disc, discIndex) => (
        <table key={disc.name} className="discipline">
          <thead>
            <tr>
              <th
                className="discipline__name"
                colSpan={3}
                style={{ background: disc.color, border: `1px solid ${disc.color}` }}
              >
                {disc.name}
              </th>
            </tr>
            <tr className="discipline__headers">
              <th>Atividade</th>
              <th>Início</th>
              <th>Fim</th>
            </tr>
          </thead>
          <tbody>
            {disc.activities.map((act, actIndex) => (
              <tr key={act.name}>
                <td>
                  {disc.readOnly ? (
                    act.name
                  ) : (
                    <Checkbox
                      done={act.done}
                      label={act.name}
                      onClick={() => handleCheckboxClick(discIndex, actIndex)}
                    />
                  )}
                </td>
                <td className="discipline__date">{act.start || "-"}</td>
                <td className="discipline__date">{act.end || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
      <Alert>
        A ausência das datas de início e fim de uma atividade indica que ela pode ser realizada
        desde o início do semestre e até o final do semestre respectivamente.
      </Alert>
      <Alert>
        Algumas atividades não estão cronologicamente ordenadas. Fique atento(a) aos prazos!
      </Alert>
    </>
  );
}

export default App;
