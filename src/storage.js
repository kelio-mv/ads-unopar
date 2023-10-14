import getCalendars from "./calendars";

class Storage {
  appName = "ads-unopar";
  calendars = this.getCalendars();

  getCalendars() {
    const data = JSON.parse(localStorage.getItem(this.appName) || "null");

    if (data) {
      switch (data.version) {
        case undefined:
          const calendars = data;
          this.swap(calendars[0].events, 10, 11);
          this.swap(calendars[1].events, 10, 11);
          this.swap(calendars[2].events, 10, 12);
          this.swap(calendars[3].events, 9, 11);
          this.swap(calendars[3].events, 10, 12);
          this.swap(calendars[3].events, 11, 12);
          this.swap(calendars[4].events, 9, 10);
          this.swap(calendars[4].events, 10, 12);
          for (let i = 0; i <= 3; i++) {
            calendars[i].events.splice(9, 0, { ...getCalendars()[i].events[9], done: null });
          }
          this.saveCalendars(calendars);
          return data;

        case "1.0":
          return data.calendars;
      }
    } else {
      const calendars = getCalendars();
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

  saveCalendars(calendars) {
    localStorage.setItem(this.appName, JSON.stringify({ calendars, version: "1.0" }));
  }

  swap(arr, i1, i2) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  }
}

export default new Storage();
