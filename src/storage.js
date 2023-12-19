import schedule from "./schedule";

class Storage {
  appName = "ads-unopar";
  schedule = this.getSchedule();

  getSchedule() {
    const data = JSON.parse(localStorage.getItem(this.appName) || "null");
    if (data) return data;
    else {
      return schedule.map((d) =>
        d.readOnly ? d : { ...d, activities: d.activities.map((a) => ({ ...a, done: null })) }
      );
    }
  }

  editState(di, ai) {
    const nextState = { null: true, true: false, false: null };
    this.schedule = this.schedule.map((d, i) =>
      i === di
        ? {
            ...d,
            activities: d.activities.map((a, i) =>
              i === ai ? { ...a, done: nextState[a.done] } : a
            ),
          }
        : d
    );
    localStorage.setItem(this.appName, JSON.stringify(this.schedule));
    return this.schedule;
  }
}

export default new Storage();
