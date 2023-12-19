import { useState } from "react";
import Checkbox from "./Checkbox";
import Alert from "./Alert";
import storage from "./storage";
import "./App.scss";

function App() {
  const [schedule, setSchedule] = useState(storage.schedule);

  return (
    <>
      {schedule.map((d, di) => (
        <table key={d.name} className="discipline">
          <thead>
            <tr>
              <th
                className="discipline__name"
                colSpan={3}
                style={{ background: d.color, border: `1px solid ${d.color}` }}
              >
                {d.name}
              </th>
            </tr>
            <tr className="discipline__headers">
              <th>Atividade</th>
              <th>Início</th>
              <th>Fim</th>
            </tr>
          </thead>
          <tbody>
            {d.activities.map((a, ai) => (
              <tr key={a.name}>
                <td>
                  {d.readOnly ? (
                    a.name
                  ) : (
                    <Checkbox
                      done={a.done}
                      label={a.name}
                      onClick={() => setSchedule(storage.editState(di, ai))}
                    />
                  )}
                </td>
                <td className="discipline__date">{a.start || "-"}</td>
                <td className="discipline__date">{a.end || "-"}</td>
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
