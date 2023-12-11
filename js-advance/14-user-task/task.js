export class Task {
  constructor(msg) {
    this.msg = msg
  }

  run() {
    console.log(this.msg)
  }
}