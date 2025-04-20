class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы'");
    }

    if (this.alarmCollection.some((value) => value.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }

    this.alarmCollection.push({ callback, time, canCall: true });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (value) => value.time !== time
    );
  }

  getCurrentFormattedTime() {
    let date = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return date;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(
      () =>
        this.alarmCollection.forEach((value) => {
          if (value.time === this.getCurrentFormattedTime()) {
            value.canCall = false;
            value.callback();
          }
        }),
      1000
    );
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((value) => (value.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
