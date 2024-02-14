import schedule from "./schedule";

class Storage {
  appName = "ads-unopar";
  schedule = this.getSchedule();

  getSchedule() {
    const data = JSON.parse(localStorage.getItem(this.appName) || "null");
    if (data) return data;
    else {
      schedule.forEach((discipline) => {
        if (!discipline.readOnly) {
          discipline.activities.forEach((activity) => (activity.done = null));
        }
      });
      return schedule;
    }
  }

  editState(disciplineIndex, activityIndex) {
    const nextState = { null: true, true: false, false: null };
    const activity = this.schedule[disciplineIndex].activities[activityIndex];
    activity.done = nextState[activity.done];
    localStorage.setItem(this.appName, JSON.stringify(this.schedule));
    return [...this.schedule];
  }
}

export default new Storage();
