class Timer {
  private startTime: number;
  private isPaused: boolean;
  private elapsedTime: number;

  constructor() {
    this.startTime = 0;
    this.isPaused = false;
    this.elapsedTime = 0;
  }

  start() {
    if (!this.startTime || this.isPaused) {
      this.startTime = new Date().getTime() - (this.elapsedTime * 1000);
      this.isPaused = false;
      this.updateElapsedTime();
    }
  }

  private updateElapsedTime() {
    const currentTime = new Date().getTime();
    this.elapsedTime = Math.floor((currentTime - this.startTime) / 1000);
  }

  pause() {
    if (!this.isPaused) {
      this.isPaused = true;
      this.updateElapsedTime();
    }
  }

  reset() {
    this.startTime = new Date().getTime();
    this.elapsedTime = 0;
  }

  log() {
    console.log(this.formatTime());
  }

  private formatTime() {
    const hours = Math.floor(this.elapsedTime / 3600);
    const minutes = Math.floor((this.elapsedTime % 3600) / 60);
    const seconds = this.elapsedTime % 60;

    return `{ h: ${hours}, m: ${minutes}, s: ${seconds}, ms: 0 }`;
  }
}

export default Timer;
